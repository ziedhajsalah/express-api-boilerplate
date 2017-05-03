const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const helmet = require('helmet')
const cors = require('cors')
const compression = require('compression')
const passport = require('passport')
const expressStatusMonitor = require('express-status-monitor')

// todo: split the middlewares following the env

module.exports = function (app) {
  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(passport.initialize())
  app.use(helmet())
  app.use(cors())
  app.use(expressStatusMonitor())
  app.use(compression())
  app.use(expressValidator())
  app.use(express.static(path.resolve(__dirname, '..', 'public')))
}
