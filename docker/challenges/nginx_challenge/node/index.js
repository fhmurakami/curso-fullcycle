const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (_req, res) => {
  const name = faker.name.findName()
  const insertQuery = `INSERT INTO people(name) values('${name}')`
  const selectQuery = `SELECT id, name FROM people`

  connection.query(insertQuery)
  connection.query(selectQuery, (_error, results, _fields) => {
    let table = '<table>'
    table += `
      <tr>
        <th>id</th>
        <th>Nome</th>
      </tr>
    `
    for (let people of results) {
      table += `
      <tr>
        <td>${people.id}</td>
        <td>${people.name}</td>
      </tr>
    `
    }
    table += `</table>`

    res.send(`<h1>Full Cycle Rocks!</h1>` + table)
  })
  connection.end()
})

app.listen(port, () => {
  console.log(`Runnning on port: ${port}`)
})
