import { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import withTests from './withTests'
import React from 'react'
import { Grid } from '../../src'

class GridStory extends PureComponent {

  render() {
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={Number(spacing)}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                Teste
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