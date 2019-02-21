const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'helloworld',
    database: 'mytasks'
  }
})

knex('users').then(rows => {
  console.log(rows)
})
