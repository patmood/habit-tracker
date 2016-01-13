import React from 'react'
import JournalEntry from './journal_entry'

class Container extends React.Component {
  render () {
      return <div className='container'>
        <h1>Habit Tracker</h1>
        {this.props.journals.map((entry) => <JournalEntry entry={entry} />)}
      </div>
  }
}

export default Container
