import React, { Component } from 'react'
import * as d3 from 'd3'
import { Button, Tab, Tabs, withStyles } from '@material-ui/core'
import moment from 'moment'
import json from './Dados_Backend.json' // TODO: Dataset

const styles = theme => (theme.lineGraph)

class LineChart extends Component {
  state = {
    value: 0,
    data: null,
    fullData: null,
    cdi: false
  }

  componentWillMount () {
    let data = json
    data.map(obj => {
      obj.date = new Date(obj.date)
      return obj
    })
    this.setState({ data, fullData: data })
  }

  handleChange = (event, value) => {
    let data = value === 0
      ? this.state.fullData
      : this.state.fullData.filter(d => d.date > moment().subtract(value, 'month') ? d.date : null)

    this.setState({ value, data })
  }

  toggleGraphLines = (value) => {
    let state = this.state
    state[value] = !state[value]
    this.setState(state)
  }

  render () {
    const { classes } = this.props

    const bisectDate = d3.bisector((d) => d.date).left

    const xScale = d3.scaleTime()
      .domain(d3.extent(this.state.data, d => d.date))
      .rangeRound([0, window.screen.width - this.props.paddingW])

    const yScale = d3.scaleLinear()
      .domain([d3.min(this.state.data, d => d.walletQuota),
        d3.max(this.state.data, d => d.walletQuota)])
      .range([window.screen.height - this.props.paddingH, 0])

    const xAxis = d3.axisBottom()
      .scale(xScale)
      .tickSizeOuter(0)
      .ticks(this.props.xTicks)
      .tickFormat(d => this.state.data.length > 30 ? `${d.getMonth() + 1}/${d.getFullYear()}` : `${d.getDate()}/${d.getMonth() + 1}`)

    const yAxis = d3.axisLeft()
      .scale(yScale)
      .tickSizeOuter(0)
      .ticks(this.props.yTicks)
      .tickSize(window.screen.width - this.props.paddingW)
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
    }

    function customXAxis (g) {
      g.call(xAxis)
      g.select('.domain').style('stroke', 'rgba(0,0,0, .4)')
      g.selectAll('.tick line').remove()
      g.selectAll('.tick text')
        .attr('class', 'roboto-regular')
        .style('fill', '#9C9C9C')
        .style('text-transform', 'capitalize')
    }
    const handlePathAnimation = (node) => {
      let totalLength = d3.select(node).node().getTotalLength()
      d3.select(node).attr('stroke-dasharray', totalLength + ' ' + totalLength)
        .attr('stroke-dashoffset', totalLength)
        .transition()
        .duration(5000)
        .attr('stroke-dashoffset', 0)
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
      let i = bisectDate(this.state.data, x0, 1)
      let d = this.state.data[i - 1]
      if (i > (this.state.data.length * 0.70)) {
        d3.select('.svgTooltipElement')
          .style('transform', 'translateX(-12rem)')
      } else {
        d3.select('.svgTooltipElement')
          .style('transform', 'translateX(0rem)')
      }

      d3.select('.focus')
        .attr('transform', 'translate(' + xScale(d.date) + ',' + yScale(d.walletQuota) + ')')

      d3.select('.focus')
        .select('line')
        .attr('y2', (window.screen.height - this.props.paddingH) - yScale(d.walletQuota))
        .attr('y1', -1 * yScale(d.walletQuota))

      d3.select('.focus')
        .select('.tooltip')
        .html(
          ` <div className='pb1 white f-0-875 roboto-bold'>R$ ${d.walletQuota}</div>
          <div className='flex flex-row roboto-regular'>
            <div className='flex flex-column items-start pb1'>
              <div className='f7 white pb1'>${(d.idxQuota).toFixed(2)}% CDI</div>
              <div className='f7 white pb1'>em ${(d.date.toLocaleDateString('pt-BR'))}</div>
            </div>
          </div>`
        )

      d3.select('.focus')
        .select('.focusDate')
        .text(function () { return `em ${d.date.toLocaleDateString('pt-BR')}` })
    }

    const tooltip = <foreignObject x='10' y='-50' width='auto' height='auto' className='svgTooltipElement'>
      <div className={['flex flex-column items-start tooltip', classes.tooltipWrapper].join(' ')} />
    </foreignObject>

    return (
      <div id='graph'>

        <div className='flex justify-center'>
          <div className={classes.filterTabsRow}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
              classes={{
                indicator: classes.tabsIndicator
              }}
            >
              <Tab
                classes={{ selected: classes.tabLabel }}
                value={0}
                label='Desde o início' />
              <Tab
                classes={{ selected: classes.tabLabel }}
                value={moment(moment.now()).diff(moment().subtract(30, 'days'), 'months', true).toFixed(2)}
                label='30 dias' />
              <Tab
                classes={{ selected: classes.tabLabel }}
                value={12}
                label='12 meses' />
              <Tab
                classes={{ selected: classes.tabLabel }}
                value={moment(moment.now()).diff(moment().startOf('year'), 'months', true).toFixed(2)}
                label='No ano' />
            </Tabs>
          </div>
        </div>

        <svg width='100%' height='100%' viewBox={`0 0 ${window.screen.width} ${window.screen.height}`}>

          <g className='graphicGroup' style={{ transform: `translate(${40}px, ${13}%)` }}>

            <g className='xAxis'
              ref={node => d3.select(node).call(customXAxis)}
              style={{ transform: `translateY(${window.screen.height - this.props.paddingH}px)` }}
            />

            <g className='yAxis'
              ref={node => d3.select(node).call(customYAxis)}
              style={{ transform: `translateX(${window.screen.width - this.props.paddingW}px)` }}
            />

            <g className='Lines'>
              {
                this.state.cdi
                  ? <path
                    d={graphCdiLineGenerator(this.state.data)}
                    stroke={this.props.lineStroke[1]}
                    strokeWidth={this.props.lineStrokeWidth[1]}
                    fill={this.props.lineFill[1]}
                    className='Path'
                    ref={node => node === null ? '' : handlePathAnimation(node)}
                  /> : ''
              }
              <path
                d={graphMainLineGenerator(this.state.data)}
                stroke={this.props.lineStroke[0]}
                strokeWidth={this.props.lineStrokeWidth[0]}
                fill={this.props.lineFill[0]}
                className='Path'
                ref={node => node === null ? '' : handlePathAnimation(node)}
              />
            </g>

            <g className={['focus', classes.tooltipElement].join(' ')} style={{ display: 'none' }}>

              <line x1='0' x2='0'className={classes.tooltipLine} />
              <circle r='7.5' className={classes.tooltipCircle} />
              {tooltip}
            </g>

            <rect className='overlay' width={window.screen.width} height={window.screen.height} fill='transparent'
              ref={
                node => {
                  let focus = d3.select('.focus')
                  d3.select(node)
                    .on('mouseover', () => focus.style('display', null))
                    .on('mouseout', () => focus.style('display', 'none'))
                    .on('mousemove', mousemove)
                }
              }
            />
          </g>

        </svg>
        <div className='flex justify-center'>
          <div className={['flex justify-center', classes.buttonsWrapper].join(' ')}>
            <div className={['flex', classes.buttonsRow].join(' ')}>
              <Button variant='contained'
                classes={{ root: classes.buttonActive }}
              >
                Carteira
              </Button>
              <Button
                disableRipple
                variant='contained'
                classes={{
                  root: this.state.cdi
                    ? classes.buttonActive
                    : classes.buttonDefault
                }}
                onClick={() => this.toggleGraphLines('cdi')}
              >
                CDI
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(LineChart)
