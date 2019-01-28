import { formatPercent } from '../Core/masks'

const helpers = (context, d3) => {
  const state = context.state
  const props = context.props
  const bisectDate = d3.bisector((d) => d.date).right

  const xScale = d3.scaleTime()
    .domain(d3.extent(state.data, d => d.date))
    .rangeRound([props.paddingW, state.width - props.paddingW])

  const yScale = d3.scaleLinear()
    .domain([d3.min(state.data, d => Math.min(d.walletQuota, d.idxQuota)),
      d3.max(state.data, d => Math.max(d.walletQuota, d.idxQuota))])
    .range([state.height - props.paddingH, (props.paddingH / 2)])

  const xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSizeOuter(0)
    .ticks(props.xTicks)
    .tickFormat(d => state.data.length > 30 ? `${d.getMonth() + 1}/${d.getFullYear()}` : `${d.getDate()}/${d.getMonth() + 1}`)

  const yAxis = d3.axisLeft()
    .scale(yScale)
    .tickSizeOuter(0)
    .ticks(props.yTicks)
    .tickSize(state.width - (props.paddingW * 2))
    .tickFormat(d => formatPercent(d, 1, ',', 0))

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

  const graphAreaGenerator = d3.area()
    .x(d => xScale(d.date))
    .y0(d => yScale(d.walletQuota) * 1.5)
    .y1(state.height - props.paddingH)

  const graphMainLineGenerator = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.walletQuota))
    .curve(d3.curveBundle)

  const graphCdiLineGenerator = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.idxQuota))
    .curve(d3.curveBundle)

  const mousemove = () => {
    let maxW = state.width - props.paddingW
    let maxH = state.height - props.paddingH
    let mouse = d3.mouse(d3.event.currentTarget)
    let x0 = xScale.invert(mouse[0])
    let i = bisectDate(state.data, x0, 1)
    let d = state.data[i - 1]

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
      .attr('transform', `translate( ${xScale(d.date)}, ${yScale(d.walletQuota)})`)

    d3.select('.focus')
      .select('line')
      .attr('y2', (state.height - (props.paddingH * 0.8)) - yScale(d.walletQuota))
      .attr('y1', -1 * (yScale(d.walletQuota) - (props.paddingH * 0.4)))

    d3.select('.focus')
      .select('.tooltip')
      .html(
        `   <div className='flex flex-row'>
              <div className='flex flex-column items-start pb1'>
                 <div className='f7 white pb1 roboto-regular'>
                  <span>Valorização:</span> ${formatPercent(d.walletQuota)}
                </div>
                <div className='f7 white pb1 roboto-regular'>
                  ${state.cdi ? `<span>Diferença:</span> ${formatPercent((d.walletQuota - d.idxQuota))} <br>
                  <span>CDI: </span>${formatPercent(d.idxQuota)}` : ''}
                </div>
                <div className='f7 white pb1 roboto-regular'>em ${(d.date.toLocaleDateString('pt-BR'))}</div>
              </div>
            </div>
        `
      )

    d3.select('.focus')
      .select('.focusDate')
      .text(function () { return `em ${d.date.toLocaleDateString('pt-BR')}` })
  }

  const translateXPercentage = (width, paddingW) => 10

  return {
    customYAxis,
    customXAxis,
    handlePathChange,
    graphMainLineGenerator,
    graphCdiLineGenerator,
    graphAreaGenerator,
    translateXPercentage,
    mousemove
  }
}

export default helpers
