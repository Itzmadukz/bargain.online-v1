const AppError = require("../utilities/appError");

const handleNotFound = (req, res, next) => {
    next(new AppError('PAGE NOT FOUND', 404))
}

const handleErrors = (err, req, res, next) => {
    const { status = 500, message = "Invalid Request" } = err
    console.log(err)
    res.status(status).json({ error: message })
}

module.exports = { handleNotFound, handleErrors }