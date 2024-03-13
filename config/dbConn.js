const mongoose = require("mongoose");
const { logEvents } = require("../middleware/logger");

const connectDB = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/bargain-test')
        .then(() => {
            console.log('db connected')
        })
        .catch(err => {
            console.log("db Connection Error", err)
            logEvents(`${err.no}: ${err}\t${err.syscall}\t${err.hostname}`,
                'mongoErrLog.log')
        })
}

const disconnectDB = async () => {
    mongoose.disconnect()
        .then(() => {
            console.log('db Disconnected')
        })
        .catch(err => {
            console.log("db Disconnection Error", err)
            logEvents(`${err.no}: ${err}\t${err.syscall}\t${err.hostname}`,
                'mongoErrLog.log')
        })
}

module.exports = { connectDB, disconnectDB }