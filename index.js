const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'helloworld',
    database: 'mytasks'
  }
})

console.log(knex)
