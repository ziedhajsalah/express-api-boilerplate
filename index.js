const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

const dbConfig = require('./config/database')
const middlewaresConfig = require('./config/middlewares')

const app = express()

dbConfig()
middlewaresConfig(app)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`server listen at port ${port}`))
