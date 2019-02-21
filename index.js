require('dotenv').config()

const express = require('express')
const app = express()
const port = 8000

const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'yourusername',
    password: process.env.DB_PASSWORD || 'yourpassword',
    database: process.env.DB_DATABASE || 'yourdatabasename'
  }
})

app.get('/users', async (req, res) => {
  res.send({
    message: 'List of all users',
    users: await knex.select().from('users')
  })
})

app.get('/users/:id', async (req, res) => {
  res.send({
    message: 'List of all users',
    user: await knex
      .select()
      .from('users')
      .where('id', Number(req.params.id))
  })
})

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`)
})
