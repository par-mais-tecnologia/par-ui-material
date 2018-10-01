import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal'
import { Paper, withStyles } from '@material-ui/core'

const styles = theme => ({
  modal: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 15px 45px 15px'
    },
    [theme.breakpoints.up('sm')]: {
      padding: '45px 45px 60px 45px'
    }
  }
})

class ModalPar extends Component {
  render () {
    const { classes } = this.props
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <Paper className={`${classes.modal} w-90 w-auto-ns`}>
          {this.props.children}
        </Paper>
      </Modal>
    )
  }
}

export default withStyles(styles)(ModalPar)
