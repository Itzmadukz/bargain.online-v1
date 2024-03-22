const { logger } = require('../middleware/logger');
const corsOptions = require('../config/corsOptions');
const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path');
const cors = require('cors');

const middleware = express()


middleware.use(logger)

middleware.use(cors(corsOptions))

middleware.use(express.json())

middleware.use(cookieParser())

middleware.use(express.static(path.join(__dirname, '../public')))

middleware.set('views', path.join(__dirname, '/views'))

module.exports = middleware