import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { getCurrencyFormat } from '../Core/masks'

const styles = theme => (theme.financialPanel)

class FinancialPanel extends Component {
  state = {
    hidden: true
  }

  handleTrigger = () => (
    this.setState({
      hidden: !this.state.hidden
    })
  )

  render () {
    const { classes, data } = this.props

    return (
      <div className={classes.root}>

        <ExpansionPanel
          onChange={() => this.handleTrigger()}
          classes={{ root: classes.header }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}>
            <div className={classes.flexBoxStart}>
              <div className={classes.box}
                style={{ backgroundColor: this.props.color }} />
              <Typography
                variant='title'
                className={classes.value}>
                {this.props.headerPercentage * 100}%
              </Typography>
              <Typography
                variant='title'
                className={classes.name}
                style={{ color: this.props.color }}
              >
                {this.props.headerName}
              </Typography>
            </div>
          </ExpansionPanelSummary>
        </ExpansionPanel>
        <div className={this.state.hidden ? classes.close : classes.open}>

          {
            data.map((obj) => (

              <ExpansionPanel hidden={this.state.hidden}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}>
                  <div className={classes.flexBoxBetween}>
                    <Typography
                      variant='title'
                      className={classes.name}>
                      {obj.name}
                    </Typography>
                    <Typography
                      variant='title'
                      className={classes.walletComposition}>
                      {obj.walletComposition * 100}%
                    </Typography>
                  </div>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                  <div className={classes.detailsLine}>
                    <Typography className={classes.detailsTitle}>
                        Rentabilidade dos últimos 24 meses
                    </Typography>
                    <Typography className={classes.detailsContent}>
                      {obj.cdi * 100}% do {obj.index}
                    </Typography>
                  </div>

                  <div className={classes.detailsLine}>
                    <Typography className={classes.detailsTitle}>
                        Carteira
                    </Typography>
                    <Typography className={classes.detailsContent}>
                      {obj.portfolio}
                    </Typography>
                  </div>

                  <div className={classes.detailsLine}>
                    <Typography className={classes.detailsTitle}>
                        Pl atual
                    </Typography>
                    <Typography className={classes.detailsContent}>
                        R$ {getCurrencyFormat(obj.gross)}
                    </Typography>
                  </div>

                  <div className={classes.detailsLine}>
                    <Typography className={classes.detailsTitle}>
                        Cnpj do fundo
                    </Typography>
                    <Typography className={classes.detailsContent}>
                      {obj.cnpj}
                    </Typography>
                  </div>
                </ExpansionPanelDetails>

              </ExpansionPanel>
            ))
          }
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(FinancialPanel)
