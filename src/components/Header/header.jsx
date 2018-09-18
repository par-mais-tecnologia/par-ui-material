import {PureComponent} from "react";
import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class Header extends PureComponent {

    getStyle(props) {
        return {
            height: props.height,
        }
    }

    render () {

        const { backgroundColor } = this.props;

        return (
            <Grid container spacing={24} className={backgroundColor} style={this.getStyle(this.props)}>
                <Grid item xs={12} className='centralize'>
                    <Typography align='center' variant='title'>
                        {this.props.children}
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}
