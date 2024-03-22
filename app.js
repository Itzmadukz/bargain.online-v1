require('dotenv').config()
const express = require('express')
const app = express()
const errorLogger = require('./middleware/errorLogger');
const { connectDB } = require('./config/dbConn');
const { default: mongoose } = require('mongoose');
const { handleNotFound, handleErrors } = require('./middleware/error');
const middleware = require('./middleware/middleware');
const PORT = process.env.PORT || 3000

connectDB()

app.use(middleware)


//endpoints
app.use('/', require('./routes/root'))

//error logs
app.use(errorLogger)

//error handlers
app.use(handleNotFound)
app.use(handleErrors)

mongoose.connection.once('open', () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

