import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { generate } from 'c3'
import { select } from 'd3'
import 'c3/c3.css'

class Donut extends Component {
  constructor (props) {
    super(props)

    this.onMouseMoveHandler = this.onMouseMoveHandler.bind(this)
  }

  onMouseMoveHandler (e) {
    const screenWidth = window.innerWidth / 2
    screenWidth < e.screenX
      ? select('.c3-tooltip-container')
        .style('transform', 'translateX(-5rem)')
      : select('.c3-tooltip-container')
        .style('transform', 'translateX(0)')
  }

  generateChart () {
    return generate({
      bindto: this.props.identication === undefined ? '#wallet-chart' : `#${this.props.identication}`,
      size: {
        width: this.props.size,
        height: this.props.size
      },
      data: {
        columns: this.props.columns,
        type: 'donut',
        colors: this.props.colors
      },
      donut: {
        width: this.props.width,
        label: {
          show: false
        }
      },
      legend: {
        show: false
      }
    })
  };

  getChartCustomStyles () {
    const { labelFirstLine, labelSecondLine } = this.props

    const labelChart = this.props.identication === undefined
      ? select('text.c3-chart-arcs-title')
      : select(`#${this.props.identication} text.c3-chart-arcs-title`)

    labelChart.html('')
    labelChart.insert('tspan').text(labelFirstLine).attr('dy', 0).attr('x', 0).style('font-family', 'sans-serif')
    labelChart.insert('tspan').text(labelSecondLine).attr('dy', 15).attr('x', 0).style('font-family', 'sans-serif')
    labelChart.style('dominant-baseline', 'auto')
    labelChart.style('fill', '#a0a0a0')
  };

  componentDidMount () {
    this.generateChart()
    this.getChartCustomStyles()
  }

  componentDidUpdate () {
    this.generateChart()
    this.getChartCustomStyles()
  }

  render () {
    return <div id={this.props.identication === undefined ? 'wallet-chart' : this.props.identication}
      onMouseMove={this.onMouseMoveHandler}
      style={{ fontFamily: 'sans-serif' }} />
  }
}

Donut.propTypes = {
  columuns: PropTypes.arrayOf(PropTypes.array),
  colors: PropTypes.object,
  labelFirstLine: PropTypes.text,
  labelSecondLine: PropTypes.text,
  size: PropTypes.number,
  width: PropTypes.number
}

Donut.defaultProps = {
  columns: [['test1', 30], ['test2', 10]],
  colors: {
    test1: 'red',
    test2: 'blue'
  },
  labelFirstLine: 'Chart',
  labelSecondLine: 'label',
  size: 240,
  width: 33
}

export default Donut
