//jshint esversion:6
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
const cors = require('cors')
const path = require('path')
const routes = require('./server/routes')

const db = require('./server/db/models')

db.sequelize.sync({ force: false }).then(() => {
  console.log('Drop and Resync Db')
})

const corsOptions = {
  origin: 'http://localhost:3001',
}

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
  session({
    secret: 'thisisoursecret',
    resave: false,
    saveUninitialized: false,
  })
)

routes.auth(app)
routes.user(app)
routes.farmer(app)

app.get('/*/*', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen('3000', () => {
  console.log(`Example app listening on port`)
})

const createTestFarmer = () => {
  const testFarmer = {
    body: {
      businessName: 'Umbrella Ltd',
      tradingAs: 'Sfaccimm',
      address: 'Via Le Mani dal Culo',
      town: 'Mortadella',
      postcode: '0011',
      state: 'QLD',
      industry: 'Construction',
      email: 'poo@poo.com',
      password: 'Poo',
    },
  }
}
