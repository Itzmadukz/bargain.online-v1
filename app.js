require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path');
const { logger, logEvents } = require('./middleware/logger');
const errorLogger = require('./middleware/errorLogger');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { connectDB } = require('./config/dbConn');
const { default: mongoose } = require('mongoose');
const PORT = process.env.PORT || 3000

console.log(process.env.NODE_ENV)

connectDB()

app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())

app.use(express.static(path.join(__dirname, '/public')))

app.set('views', path.join(__dirname, '/views'))


//endpoints
app.use('/', require('./routes/root'))

//error logs
app.use(errorLogger)

mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

