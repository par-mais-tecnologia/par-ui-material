const helpers = (context, d3) => {
  const state = context.state
  const props = context.props

  const xScale = d3.scaleTime()
    .domain(d3.extent(state.dateRange.filtered, d => d))
    .rangeRound([props.paddingW, state.width - props.paddingW])

  const yScale = d3.scaleLinear()
    .domain([d3.min(state.mainLine.filtered),
      d3.max(state.indexLine.filtered)])
    .range([state.height - props.paddingH, (props.paddingH / 2)])

  const lineGenerator = d3.line()
    .x((data, index) => xScale(state.dateRange.filtered[index]))
    .y(data => yScale(data))

  const areaGenerator = d3.area()
    .x((data, index) => xScale(state.dateRange.filtered[index]))
    .y0((data) => yScale(data * state.areaLine.min))
    .y1((data) => yScale(data * state.areaLine.max))

  const minLineGenerator = d3.line()
    .x((data, index) => xScale(state.dateRange.filtered[index]))
    .y(data => yScale(data * state.areaLine.min))

  const maxLineGenerator = d3.line()
    .x((data, index) => xScale(state.dateRange.filtered[index]))
    .y(data => yScale(data * state.areaLine.max))

  const xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSizeOuter(0)
    .ticks(props.xTicks)
    .tickFormat(d => state.dateRange.filtered.length > 30 ? `${d.getMonth() + 1}/${d.getFullYear()}` : `${d.getDate()}/${d.getMonth() + 1}`)

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

  const yAxis = d3.axisLeft()
    .scale(yScale)
    .tickSizeOuter(0)
    .ticks(props.yTicks)
    .tickSize(state.width - (props.paddingW * 2))
    .tickFormat(d => `${d.toFixed(2)}%`)

  function customYAxis (g) {
    g.call(yAxis)
    g.select('.domain').remove()
    g.selectAll('.tick line')
      .style('stroke', '#F0F0F0')
    g.selectAll('.tick text')
      .attr('dy', 4)
      .attr('class', 'roboto-regular')
      .style('transform', 'translateX(-.5rem)')
      .style('fill', '#9C9C9C')
    if (window.screen.width < 370) {
      g.selectAll('.tick text')
        .style('font-size', '12px')
    }
  }

  const mousemove = () => {
    let maxW = state.width - props.paddingW
    let maxH = state.height - props.paddingH
    let mouse = d3.mouse(d3.event.currentTarget)
    let x0 = xScale.invert(mouse[0])
    let i = bisectDate(state.dateRange.filtered, x0, 1)
    let data = {
      index: state.indexLine.filtered[i - 1],
      wallet: state.mainLine.filtered[i - 1],
      date: state.dateRange.filtered[i - 1]
    }
    let tooltip = document.querySelector('.svgTooltipElement')

    mouse[1] + 100 > maxH
      ? tooltip.style.transform = 'translateY(-1rem)'
      : mouse[1] - 100 < 0
        ? tooltip.style.transform = 'translateY(2rem)'
        : tooltip.style.transform = 'translateY(0rem)'

    mouse[0] + 170 > maxW
      ? mouse[0] - 170 < 0
        ? tooltip.style.transform = `translate(-90px, ${state.cdi ? '-4rem' : '-2rem'})`
        : tooltip.style.transform += 'translateX(-190px)'
      : tooltip.style.transform += 'translateX(0px)'

    d3.select('.focus')
      .attr('transform', `translate( ${xScale(data.date)}, ${yScale(data.wallet)})`)
    d3.select('.focus')
      .select('line')
      .attr('y2', (state.height - (props.paddingH * 0.8)) - yScale(data.wallet))
      .attr('y1', -1 * (yScale(data.wallet) - (props.paddingH * 0.4)))
    d3.select('.focus')
      .select('.tooltip')
      .html(
        `   <div className='flex flex-row'>
              <div className='flex flex-column items-start pb1'>
                 <div className='f7 white pb1 roboto-regular'>
                  <span>Valorização:</span> ${data.wallet.toFixed(2)}%
                </div>
                <div className='f7 white pb1 roboto-regular'>
                  ${state.indexLine.active ? `<span>Diferença:</span> ${(data.wallet - data.index).toFixed(2)}% <br>
                  <span>CDI: </span>${data.index.toFixed(2)}%` : ''}
                </div>
                <div className='f7 white pb1 roboto-regular'>em ${data.date.local().format('d/MM/YYYY')}</div>
              </div>
            </div>`
      )

    d3.select('.focus')
      .select('.focusDate')
      .text(function () { return `em ${data.date.local().format('d/MM/YYYY')}` })
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

  const bisectDate = d3.bisector(data => data).right

  return {
    lineGenerator,
    customXAxis,
    customYAxis,
    mousemove,
    handlePathChange,
    areaGenerator,
    minLineGenerator,
    maxLineGenerator
  }
}

export default helpers
