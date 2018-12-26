const helpers = (context, d3) => {
  const state = context.state
  const props = context.props
  const bisectDate = d3.bisector((d) => d.date).left

  const xScale = d3.scaleTime()
    .domain(d3.extent(state.data, d => d.date))
    .rangeRound([0, state.width - props.paddingW])

  const yScale = d3.scaleLinear()
    .domain([d3.min(state.data, d => Math.min(d.walletQuota, d.idxQuota)),
      d3.max(state.data, d => Math.max(d.walletQuota, d.idxQuota))])
    .range([state.height - props.paddingH, 0])

  const xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSizeOuter(0)
    .ticks(props.xTicks)
    .tickFormat(d => state.data.length > 30 ? `${d.getMonth() + 1}/${d.getFullYear()}` : `${d.getDate()}/${d.getMonth() + 1}`)

  const yAxis = d3.axisLeft()
    .scale(yScale)
    .tickSizeOuter(0)
    .ticks(props.yTicks)
    .tickSize(state.width - props.paddingW)
    .tickFormat(d => `${d.toFixed(2)}%`)

  function customYAxis (g) {
    g.call(yAxis)
    g.select('.domain').remove()
    g.selectAll('.tick line')
      .style('stroke', '#F0F0F0')
    g.selectAll('.tick text')
      .attr('dy', 4)
      .attr('class', 'roboto-regular')
      .style('fill', '#9C9C9C')
    if (window.screen.width < 370) {
      g.selectAll('.tick text')
        .style('font-size', '12px')
    }
  }

  function customXAxis (g) {
    g.call(xAxis)
    g.select('.domain').style('stroke', 'rgba(0,0,0, .4)')
    g.selectAll('.tick line').remove()
    g.selectAll('.tick text')
      .attr('class', 'roboto-regular')
      .style('fill', '#9C9C9C')
      .style('text-transform', 'capitalize')
    if (window.screen.width < 370) {
      g.selectAll('.tick text')
        .style('font-size', '12px')
        .style('transform', 'translate(-.5rem, 10px) rotate(-30deg)')
    }
  }

  const handlePathChange = (node, animate) => {
    let totalLength = d3.select(node).node().getTotalLength()

    return new Promise((resolve) => {
      if (animate) {
        d3.select(node).attr('stroke-dasharray', totalLength + ' ' + totalLength)
          .attr('stroke-dashoffset', totalLength)
          .transition()
          .duration(3000)
          .attr('stroke-dashoffset', 0)
          .each('end', resolve())
      } else {
        d3.select(node).attr('stroke-dasharray', totalLength + ' ' + totalLength)
          .attr('stroke-dashoffset', totalLength)
          .attr('stroke-dashoffset', 0)
          .each('end', resolve())
      }
    })
  }

  const graphMainLineGenerator = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.walletQuota))

  const graphCdiLineGenerator = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.idxQuota))
    .curve(d3.curveBundle)

  const mousemove = () => {
    let x0 = xScale.invert(d3.mouse(d3.event.currentTarget)[0])
    let i = bisectDate(state.data, x0, 1)
    let d = state.data[i - 1]
    if (i < (state.data.length * 0.10)) {
      d3.select('.svgTooltipElement')
        .style('transform', 'translate(0px, -30px)')
    } else if (i > (state.data.length * 0.70)) {
      d3.select('.svgTooltipElement')
        .style('transform', 'translate(-190px, 0px)')
    } else {
      d3.select('.svgTooltipElement')
        .style('transform', 'translate(0px, 0px)')
    }

    d3.select('.focus')
      .attr('transform', 'translate(' + xScale(d.date) + ',' + yScale(d.walletQuota) + ')')

    d3.select('.focus')
      .select('line')
      .attr('y2', (state.height - props.paddingH) - yScale(d.walletQuota))
      .attr('y1', -1 * yScale(d.walletQuota))

    d3.select('.focus')
      .select('.tooltip')
      .html(
        `   <div className='flex flex-row'>
              <div className='flex flex-column items-start pb1'>
                 <div style="font-family: 'Roboto Light', sans-serif" className='f7 white pb1 roboto-regular'>
                  <span style="font-family: 'Roboto Regular', sans-serif">Valorização:</span> ${d.walletQuota.toFixed(2)}%
                </div>
                <div style="font-family: 'Roboto Light', sans-serif" className='f7 white pb1 roboto-regular'>
                  ${state.cdi ? `<span style="font-family: 'Roboto Regular', sans-serif">Diferença:</span> ${(d.walletQuota - d.idxQuota).toFixed(2)}% <br>  
                  <span style="font-family: 'Roboto Regular', sans-serif">CDI: </span>${d.idxQuota.toFixed(2)}%` : ''}
                </div>
                <div style="font-family: 'Roboto Regular', sans-serif" className='f7 white pb1 roboto-regular'>em ${(d.date.toLocaleDateString('pt-BR'))}</div>
              </div>
            </div>`
      )

    d3.select('.focus')
      .select('.focusDate')
      .text(function () { return `em ${d.date.toLocaleDateString('pt-BR')}` })
  }

  const translateXPercentage = (width, paddingW) => 10// (width - (width * ((paddingW / 2) / 100)))//width > 400 ?  / 100 : 14

  return {
    customYAxis,
    customXAxis,
    handlePathChange,
    graphMainLineGenerator,
    graphCdiLineGenerator,
    translateXPercentage,
    mousemove
  }
}

export default helpers
