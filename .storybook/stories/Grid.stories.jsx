import { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import withTests from './withTests'
import React from 'react'
import { Grid } from '../../src'
import { Paper } from '../../src'

class GridStory extends PureComponent {

  render() {

    return (
      <Grid container spacing={16} style={ {marginTop:20}}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={24}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper style={ {height: 140, width:100}}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

storiesOf('Grid', module)
  .addDecorator(withTests('Grid'))
  .add('Grid', () => {
    return <GridStory/>
  })