var query = require('pg-query')

const dbUrl = 'postgres:///habit_tracker'

query.connectionParameters = process.env.DATABASE_URL || dbUrl

query(
  'insert into journal_entries (ts, type, facts) values ($1, $2, $3)',
  [
    new Date(),
    'test type',
    'test fact'
  ]
)
