import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { getCurrencyFormat, formatDecAsPercent, formatPercent } from '../Core/masks'

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
                {formatPercent(this.props.headerPercentage, 1, ',', 0)}
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
            data.map((obj, i) => (

              <ExpansionPanel hidden={this.state.hidden} key={i} classes={{ rounded: classes.rounded }}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}>
                  <div className={classes.flexBoxBetween}>
                    <Typography
                      variant='title'
                      className={classes.name}>
                      {obj.product.name}
                    </Typography>
                    <Typography
                      variant='title'
                      className={classes.walletComposition}>
                      {formatDecAsPercent(obj.percentual, 1, ',', 0)}
                    </Typography>
                  </div>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                  <div className={classes.detailsLine}>
                    <Typography className={classes.detailsTitle}>
                      Rentabilidade dos últimos 24 meses
                    </Typography>
                    <Typography className={classes.detailsContent}>
                      {
                        obj.product.rentability > 0
                          ? `${formatPercent(obj.product.rentability, 0, ',', 0)} do CDI`
                          : `Fundo aberto a menos de 24 meses`
                      }
                    </Typography>
                  </div>

                  <div className={classes.detailsLine}>
                    <Typography className={classes.detailsTitle}>
                        Carteira
                    </Typography>
                    <Typography className={classes.detailsContent}>
                      {obj.product.evaluationClient}
                    </Typography>
                  </div>

                  <div className={classes.detailsLine}>
                    <Typography className={classes.detailsTitle}>
                      Pl atual
                    </Typography>
                    <Typography className={classes.detailsContent}>
                      {getCurrencyFormat(obj.product.currentPL, 'R$', 0, ' ', 0)}
                    </Typography>
                  </div>

                  <div className={classes.detailsLine}>
                    <Typography className={classes.detailsTitle}>
                      Cnpj do fundo
                    </Typography>
                    <Typography className={classes.detailsContent}>
                      {obj.product.cnpj}
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
