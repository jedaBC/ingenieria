const Pool = require('pg').Pool;
//const Pool = require('pg').Pool

const pool = new Pool({
  user: 'jxgkkqiv',
  host: 'queenie.db.elephantsql.com',
  database: 'jxgkkqiv',
  password: 'cvMxi6xlOpFfClLNkhLht_YzjHQbJRiS',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM doctor ORDER BY doctor_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getUsers,
  }
  