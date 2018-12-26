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
    width: 0,
    height: 0,
    tab: [
      { key: 0, label: 'Desde o início', filter: { date: moment('1900-01-01'), label: 'totalResult' } },
      { key: 1, label: 'No mês', filter: { date: moment().startOf('month'), label: 'monthlyResult' } },
      { key: 2, label: 'No ano', filter: { date: moment().startOf('year'), label: 'yearlyResult' } }
    ]
  }

  animateWallet = true
  animateCDI = true

  componentWillMount () {
    let data = this.props.dataset
    data.map(obj => {
      obj.date = new Date(obj.date)
      return obj
    })
    this.setState({ data, fullData: data })
    window.addEventListener('resize', (event) => {
      this.resizeGraph()
    })
  }

  resizeGraph () {
    let state = this.state
    let parentDivRect = document.querySelector('#main-graph').getBoundingClientRect()
    state.width = parentDivRect.width
    state.height = Math.max(parentDivRect.height / 2.5, 344)
    this.setState({ state })
  }

  componentDidMount () {
    this.resizeGraph()
  }

  handleChange = (event, value) => {
    this.animateWallet = true
    this.animateCDI = true
    let filter = this.state.tab[value].filter
    let data = this.state.fullData
      .filter(d => filter.date.isBefore(d.date))
      .map((d, idx, arr) => {
        return {
          date: d.date,
          idxQuota: d.idxQuota - arr[0].idxQuota,
          walletQuota: d.walletQuota - arr[0].walletQuota
        }
      })

    if (this.props.changePeriod) {
      this.props.changePeriod(data, filter.label)
    }
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

    const tooltip = <foreignObject x='10' y='-50' width='169px' height={this.state.cdi ? '100px' : '89px'} className='svgTooltipElement'>
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
                root: classes.tabsRoot,
                indicator: classes.tabsIndicator
              }}
            >
              {
                this.state.tab.map((tab, index) => <Tab
                  classes={{
                    root: classes.tabsRoot,
                    selected: classes.tabLabel
                  }}
                  value={index}
                  label={tab.label}
                />
                )
              }
            </Tabs>
          </div>
        </div>

        <div className='flex justify-center' id='main-graph'>

          <svg width='90%' height='90%' viewBox={`0 0 ${this.state.width - 40} ${this.state.height}`}>

            <g className='graphicGroup'
              style={{ transform: `translate(55px, 40px)` }}
            >
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
                      ref={node => node !== null ? helper.handlePathChange(node, this.animateCDI)
                        .then(() => { this.animateCDI = false }) : ''}
                    /> : ''
                }
                <path
                  d={helper.graphMainLineGenerator(this.state.data)}
                  stroke={this.props.lineStroke[0]}
                  strokeWidth={this.props.lineStrokeWidth[0]}
                  fill={this.props.lineFill[0]}
                  className='Path'
                  ref={node => node !== null ? helper.handlePathChange(node, this.animateWallet)
                    .then(() => { this.animateWallet = false }) : ''}
                />
              </g>

              <g className={['focus', classes.tooltipElement].join(' ')} style={{ display: 'none' }}>

                <line x1='0' x2='0'className={classes.tooltipLine} />
                <circle r='7.5' className={classes.tooltipCircle} />
                {tooltip}
              </g>

              <rect className='overlay'
                width={this.state.width - this.props.paddingW}
                height={this.state.height - this.props.paddingH} fill='transparent'
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
                    ? classes.buttonCDIActive
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
