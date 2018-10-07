const express = require('express'),
  path = require('path'),
  http = require('http'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  helmet = require('helmet'),
  eventsJSON = require('./events.json')

const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/api/events', (req, res) => {
  res.json(eventsJSON)
})

const server = http.createServer(app)

server.listen(3001)
