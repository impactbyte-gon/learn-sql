require('dotenv').config()
const express = require('express')
const sqlite = require('sqlite')

const app = express()
const port = process.env.PORT || 8000
const sqliteDB = sqlite.open(process.env.DB_PATH, { Promise })

app.get('/users', async (req, res) => {
  const db = await sqliteDB // slow process
  const users = await db.all('SELECT * FROM users') // slow process
  res.send({
    message: 'Get all users',
    users: users
  })
})

app.get('/users/:id', async (req, res) => {
  const db = await sqliteDB
  const user = await db.get(`SELECT * FROM users WHERE id = ${req.params.id}`)

  res.send({
    message: 'Get one user',
    user: user
  })
})

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`)
})
