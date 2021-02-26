const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes')

const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors())
server.use('/', router)

module.exports = server;