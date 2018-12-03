import React from 'react'

class ParallaxPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      yOffset: 0,
      scrollDiff: 0,
      pageHeight: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    const headerHeight = document.getElementById('seePageParallaxHeader')
      ? document.getElementById('seePageParallaxHeader').scrollHeight
      : 50
    const contentHeight = document.getElementById('seePageParallaxContent')
      ? document.getElementById('seePageParallaxContent').scrollHeight
      : 50
    this.setState({
      pageHeight: headerHeight + contentHeight
    })
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (event) {
    const yOffset = window.pageYOffset
    const scrollDiff = Math.abs(yOffset - this.state.yOffset)
    if (scrollDiff > 5 && this.state.scrollDiff !== scrollDiff) {
      this.setState({ yOffset, scrollDiff })
    }
  }

  render () {
    const { pageHeight, yOffset } = this.state
    const { header, content, headerFullPage } = this.props
    return (
      <div style={{
        height: `${pageHeight - yOffset}px`
      }}>
        <div id='seePageParallaxHeader'
          className={`${headerFullPage ? 'vh-100' : 'vh-50'} vh-50-l z-1`}
        >
          {header}
        </div>
        <div id='seePageParallaxContent' className='z-2' style={{
          transform: `translateY(-${18 + yOffset}px)`
        }}>
          {content}
        </div>
      </div>
    )
  }
}

export default ParallaxPage
