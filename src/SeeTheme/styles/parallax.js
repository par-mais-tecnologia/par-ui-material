export default {
  parallaxContainer: {
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'auto',
    perspective: '1px'
  },
  parallaxSection: {
    position: 'relative',
    height: '60vh'
  },
  parallaxContent: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    transform: 'translateZ(-1px) scale(2.0) translateY(-4rem)'
  },
  content: {
    position: 'relative',
    height: '100vh'
  },
  mobile: {
    height: '100vh'
  }
}
