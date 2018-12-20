import React, { Component } from 'react'
import * as d3 from 'd3'
import { Button, Tab, Tabs, withStyles } from '@material-ui/core'
import moment from 'moment'
import grapHelper from './graphHelpers'

const styles = theme => (theme.lineGraph)

class LineChart extends Component {
  state = {
    value: 0,
    data: null,
    fullData: null,
    cdi: false,
    width: window.screen.width,
    height: window.screen.height
  }

  componentWillMount () {
    let data = this.props.dataset
    data.map(obj => {
      obj.date = new Date(obj.date)
      return obj
    })
    this.setState({ data, fullData: data })
    window.addEventListener('resize', (event) => {
      let state = this.state
      state.width = event.target.screen.width
      state.height = (event.target.screen.height * 0.8)
      this.setState({ state })
    })
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

    const helper = grapHelper(this, d3)

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

        <div className='flex justify-center'>

          <svg width='90%' height='90%' viewBox={`0 0 ${this.state.width} ${this.state.height}`}>

            <g className='graphicGroup' style={{ transform: `translate(${helper.translateXPercentage(this.state.width, this.props.paddingW)}%, ${10}%)` }}>
              <g className={['xAxis', classes.axis].join(' ')}
                ref={node => d3.select(node).call(helper.customXAxis)}
                style={{ transform: `translateY(${this.state.height - this.props.paddingH}px)` }}
              />

              <g className={['yAxis', classes.axis].join(' ')}
                ref={node => d3.select(node).call(helper.customYAxis)}
                style={{ transform: `translateX(${this.state.width - this.props.paddingW}px)` }}
              />

              <g className='Lines'>
                {
                  this.state.cdi
                    ? <path
                      d={helper.graphCdiLineGenerator(this.state.data)}
                      stroke={this.props.lineStroke[1]}
                      strokeWidth={this.props.lineStrokeWidth[1]}
                      fill={this.props.lineFill[1]}
                      className='Path'
                      ref={node => node === null ? '' : helper.handlePathAnimation(node)}
                    /> : ''
                }
                <path
                  d={helper.graphMainLineGenerator(this.state.data)}
                  stroke={this.props.lineStroke[0]}
                  strokeWidth={this.props.lineStrokeWidth[0]}
                  fill={this.props.lineFill[0]}
                  className='Path'
                  ref={node => node === null ? '' : helper.handlePathAnimation(node)}
                />
              </g>

              <g className={['focus', classes.tooltipElement].join(' ')} style={{ display: 'none' }}>

                <line x1='0' x2='0'className={classes.tooltipLine} />
                <circle r='7.5' className={classes.tooltipCircle} />
                {tooltip}
              </g>

              <rect className='overlay' width={this.state.width - this.props.paddingW} height={this.state.height - this.props.paddingH} fill='transparent'
                ref={
                  node => {
                    let focus = d3.select('.focus')
                    d3.select(node)
                      .on('mouseover', () => focus.style('display', null))
                      .on('mouseout', () => focus.style('display', 'none'))
                      .on('mousemove', helper.mousemove)
                  }
                }
              />
            </g>

          </svg>
        </div>

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
