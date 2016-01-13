var pg = require('pg')
var query = require('pg-query')

const dbUrl = 'postgres:///habit_tracker'

query.connectionParameters = process.env.DATABASE_URL || dbUrl

module.exports = {
  allJournals: () => {
    return query('select * from journal_entries')
  },
}

const seed = () => {
  return query(
    'insert into journal_entries (ts, type, facts) values ($1, $2, $3)',
    [
      new Date(),
      'test type',
      'test fact',
    ]
  )
}

if (!module.parent) {
  // This is run with the reset script
  seed()
    .then(() => query('select * from journal_entries'))
    .then((data) => {
      console.log(data[0])
      pg.end()
    })
}
