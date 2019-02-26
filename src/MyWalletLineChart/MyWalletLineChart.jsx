import React, { Component } from 'react'
import * as d3 from 'd3'
import { Button, Tab, Tabs, withStyles } from '@material-ui/core'
import moment from 'moment'
import graphHelper from './helpers'

const styles = theme => (({
  ...theme.lineGraph,
  buttonsRow: {
    ...theme.lineGraph.buttonsRow,
    [theme.breakpoints.down(700)]: {
      minWidth: '18rem'
    }
  },
  buttonAreaActive: {
    ...theme.lineGraph.buttonAreaActive,
    [theme.breakpoints.down(700)]: {
      fontSize: '12px'
    }
  },
  buttonIndexActive: {
    ...theme.lineGraph.buttonIndexActive,
    [theme.breakpoints.down(700)]: {
      fontSize: '12px'
    }
  },
  buttonDefault: {
    ...theme.lineGraph.buttonDefault,
    [theme.breakpoints.down(700)]: {
      fontSize: '12px'
    }
  }
}))

class MyWalletLineChart extends Component {
  state = {
    value: 0,
    indexLine: {
      active: false,
      data: this.props.idxDataset.data,
      filtered: this.props.idxDataset.data
    },
    mainLine: {
      active: false,
      data: this.props.walletDataset.data,
      filtered: this.props.walletDataset.data
    },
    areaLine: {
      active: false,
      min: this.props.idxRange !== undefined ? this.props.idxRange.min : null,
      max: this.props.idxRange !== undefined ? this.props.idxRange.max : null
    },
    dateRange: {
      data: null,
      filtered: null
    },
    width: 0,
    height: 0,

    tab: [
      { key: 0, label: 'Desde o início', filter: { date: moment('1900-01-01'), label: 'total' } },
      { key: 1, label: 'No mês', filter: { date: moment().startOf('month'), label: 'monthly' } },
      { key: 2, label: 'No ano', filter: { date: moment().startOf('year'), label: 'yearly' } }
    ]
  }

  animateIndex = true
  animateWallet = true
  animateArea =true

  componentWillMount () {
    let props = this.props.dateRange
    let dateRange = this.state.dateRange
    dateRange.data = props.map(date => moment(date, 'DD-MM-YYYY'))
    dateRange.filtered = dateRange.data
    this.setState({ dateRange })
    window.addEventListener('resize', (event) => {
      this.resizeGraph()
    })
  }

  resizeGraph () {
    let state = this.state
    let parentDivRect = document.querySelector('#main-graph').getBoundingClientRect()
    state.width = parentDivRect.width
    state.height = Math.max(parentDivRect.height / 2.5, 344)
    this.setState(state)
  }

  componentDidMount () {
    this.resizeGraph()
  }

  handleChange = (event, value) => {
    this.animateIndex = true
    this.animateWallet = true

    let indexLine = this.state.indexLine
    let mainLine = this.state.mainLine
    let dateRange = this.state.dateRange

    let dateFilter = this.state.dateRange.data.filter(date => date.isAfter(this.state.tab[value].filter.date))
    let arrayStart = this.state.dateRange.data.map(Number).indexOf(+dateFilter[0])

    indexLine.filtered = indexLine.data.slice(arrayStart)
    mainLine.filtered = mainLine.data.slice(arrayStart)
    dateRange.filtered = dateRange.data.slice(arrayStart)

    this.props.onChangePeriod(this.state.tab[value].filter.label)

    this.setState({ value, mainLine, indexLine, dateRange })
  }

  findDateIndex = (element) => element >= this.state.dateRange.data

  toggleGraphLines = (value) => {
    let state = this.state
    state[value].active = !state[value].active
    this.setState(state)
  }

  render () {
    const { classes } = this.props

    const helper = graphHelper(this, d3)

    const tooltip = <foreignObject x='10' y='-50' width='169px' height={this.state.cdi ? '110px' : '89px'} className={['svgTooltipElement', classes.tooltipElement].join(' ')}>
      <div className={['flex flex-column items-start tooltip', classes.tooltipWrapper].join(' ')} />
    </foreignObject>

    return (
      <div id='graph'>

        <div className='flex justify-center'>
          <div className={classes.filterTabsRow}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              variant='fullWidth'
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
                  key={index}
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

            <g className={['xAxis', classes.axis].join(' ')}
              ref={node => d3.select(node).call(helper.customXAxis)}
              style={{ transform: `translateY(${this.state.height - (this.props.paddingH / 1.25)}px)` }}
            />

            <g className={['yAxis', classes.axis].join(' ')}
              ref={node => d3.select(node).call(helper.customYAxis)}
              style={{ transform: `translateX(${this.state.width - (this.props.paddingW * 1.5)}px)` }}
            />

            <g className='Lines'>

              { this.state.areaLine.active && <g className='Area'>
                <path
                  d={helper.areaGenerator(this.state.indexLine.filtered)}
                  className='Path'
                  fill={this.props.idxRange.fill}
                  ref={node => node !== null ? helper.handlePathChange(node, this.animateIndex)
                    .then(() => { this.animateArea = false }) : ''}
                />
                <path
                  d={helper.minLineGenerator(this.state.indexLine.filtered)}
                  className='Path'
                  stroke={this.props.idxRange.stroke}
                  strokeWidth={window.screen.width < 370
                    ? this.props.idxRange.strokeWidth / 2
                    : this.props.idxRange.strokeWidth}
                  style={{ strokeDasharray: `${3}, ${3}` }}
                  fill='none'
                  ref={node => node !== null ? helper.handlePathChange(node, this.animateIndex)
                    .then(() => { this.animateIndex = false }) : ''}
                />
                <path
                  d={helper.maxLineGenerator(this.state.indexLine.filtered)}
                  className='Path'
                  fill='none'
                  stroke={this.props.idxRange.stroke}
                  strokeWidth={window.screen.width < 370
                    ? this.props.idxRange.strokeWidth / 2
                    : this.props.idxRange.strokeWidth}
                  style={{ strokeDasharray: `${3}, ${3}` }}
                  ref={node => node !== null ? helper.handlePathChange(node, this.animateIndex)
                    .then(() => { this.animateIndex = false }) : ''}
                />
              </g>
              }

              { this.state.indexLine.active && <path
                d={helper.lineGenerator(this.state.indexLine.filtered)}
                className='Path'
                stroke={this.props.idxDataset.stroke}
                strokeWidth={window.screen.width < 370
                  ? this.props.idxDataset.strokeWidth / 2
                  : this.props.idxDataset.strokeWidth}
                fill={this.props.idxDataset.fill}
                ref={node => node !== null ? helper.handlePathChange(node, this.animateIndex)
                  .then(() => { this.animateIndex = false }) : ''}
              />}

              <path
                d={helper.lineGenerator(this.state.mainLine.filtered)}
                className='Path'
                stroke={this.props.walletDataset.stroke}
                strokeWidth={window.screen.width < 370
                  ? this.props.walletDataset.strokeWidth / 2
                  : this.props.walletDataset.strokeWidth}
                fill={this.props.walletDataset.fill}
                ref={node => node !== null ? helper.handlePathChange(node, this.animateWallet)
                  .then(() => { this.animateWallet = false }) : ''}
              />

            </g>

            <g className='focus' style={{ display: 'none' }}>

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
              {
                this.state.indexLine.data != null &&
                <Button
                  disableRipple
                  variant='contained'
                  classes={{
                    root: this.state.indexLine.active
                      ? classes.buttonIndexActive
                      : classes.buttonDefault
                  }}
                  onClick={() => this.toggleGraphLines('indexLine')}>
                  {this.props.idxDataset.name || 'CDI'}
                </Button>
              }
              { this.props.idxRange !== undefined &&
                <Button
                  disableRipple
                  variant='contained'
                  style={{ width: '170px' }}
                  classes={{
                    root: this.state.areaLine.active
                      ? classes.buttonAreaActive
                      : classes.buttonDefault
                  }}
                  onClick={() => this.toggleGraphLines('areaLine')}>
                  {this.props.idxRange.name || 'Potencial de retorno'}
                </Button>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MyWalletLineChart)
