import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import withTests from './withTests'
import { ObjectiveExpandableCard, MuiThemeProvider, SeeTheme } from '../../src'

class ObjectiveExpandableCardStory extends PureComponent {

  render () {
    return (
      <MuiThemeProvider theme={SeeTheme}>

        <div className='mv4 w-40-ns w-100 justify-center flex'
             style={{ cursor: 'pointer', minWidth: '300px', margin: '0 auto', marginTop: '2rem', marginBottom: '2rem' }}
             onClick={() => console.log('Click')}>
          <ObjectiveExpandableCard
            objectiveType={'SECURITY_RESERVE'}
            value={8450.045}
            classes='h-100 flex justify-center'
            numberOfDays={15}
            requested={true}
            amountRequest={23.00}
          />
        </div>

        <div className='mv4 w-40-ns w-100 justify-center flex'
             style={{ cursor: 'pointer', minWidth: '300px', margin: '0 auto', marginTop: '2rem', marginBottom: '2rem' }}
             onClick={() => console.log('Click')}>
          <ObjectiveExpandableCard
            objectiveType={'TIMED_OBJECTIVE'}
            value={8450.045}
            classes='h-100 flex justify-center'
            numberOfDays={15}
          />
        </div>

        <div className='mv4 w-40-ns w-100 justify-center flex'
             style={{ cursor: 'pointer', minWidth: '300px', margin: '0 auto', marginTop: '2rem', marginBottom: '2rem' }}
             onClick={() => console.log('Click')}>
          <ObjectiveExpandableCard
            objectiveType={'FINANCIAL_INDEPENDENCE'}
            value={8450.045}
            classes='h-100 flex justify-center'
            numberOfDays={15}
          />
        </div>

        <div className='mv4 w-40-ns w-100 justify-center flex'
             style={{ cursor: 'pointer', minWidth: '300px', margin: '0 auto', marginTop: '2rem', marginBottom: '2rem' }}
             onClick={() => console.log('Click')}>
          <ObjectiveExpandableCard
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

storiesOf('ObjectiveExpandableCard', module)
  .addDecorator(withTests('ObjectiveExpandableCard'))
  .add('ObjectiveExpandable Card', () => {
    return <ObjectiveExpandableCardStory/>
  })