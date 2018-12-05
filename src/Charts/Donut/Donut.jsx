import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { generate } from 'c3'
import { select } from 'd3'
import 'c3/c3.css'

class Donut extends Component {
  generateChart () {
    return generate({
      bindto: '#wallet-chart',
      size: {
        width: this.props.size
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

    const labelChart = select('text.c3-chart-arcs-title')

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
    return <div id='wallet-chart' />
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
