import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import withTests from './withTests'
import { ObjectiveRescueCard, MuiThemeProvider, SeeTheme } from '../../src'

class ObjectiveRescueCardStory extends PureComponent {

  render () {
    console.log(SeeTheme)
    return (
      <MuiThemeProvider theme={SeeTheme}>

        <div className='mv4 w-40-ns w-100 justify-center flex'
             style={{ margin: '0 auto', marginTop: '2rem', marginBottom: '2rem' }}
             onClick={() => console.log('Click')}>
          <ObjectiveRescueCard
            objectiveType={'SECURITY_RESERVE'}
            value={8450.045}
            classes='h-100 flex justify-center'
            numberOfDays={15}
            requested={true}
            amountRequest={23.00}
          />
        </div>

        <div className='mv4 w-40-ns w-100 justify-center flex'
             style={{ margin: '0 auto', marginTop: '2rem', marginBottom: '2rem' }}
             onClick={() => console.log('Click')}>
          <ObjectiveRescueCard
            objectiveType={'TIMED_OBJECTIVE'}
            value={8450.045}
            classes='h-100 flex justify-center'
            numberOfDays={15}
          />
        </div>

        <div className='mv4 w-40-ns w-100 justify-center flex'
             style={{ margin: '0 auto', marginTop: '2rem', marginBottom: '2rem' }}
             onClick={() => console.log('Click')}>
          <ObjectiveRescueCard
            objectiveType={'FINANCIAL_INDEPENDENCE'}
            value={8450.045}
            classes='h-100 flex justify-center'
            numberOfDays={15}
          />
        </div>

        <div className='mv4 w-40-ns w-100 justify-center flex'
             style={{ margin: '0 auto', marginTop: '2rem', marginBottom: '2rem' }}
             onClick={() => console.log('Click')}>
          <ObjectiveRescueCard
            objectiveType={'IMPROVE_PROFITABILITY'}
            value={8450.045}
            paperClasses='h-100 flex justify-center'
            numberOfDays={15}
          />
        </div>

      </MuiThemeProvider>
    )
  }
}

storiesOf('ObjectiveRescueCard', module)
  .addDecorator(withTests('ObjectiveRescueCard'))
  .add('ObjectiveRescue Card', () => {
    return <ObjectiveRescueCardStory/>
  })