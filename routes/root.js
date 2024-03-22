const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const path = require('path')
const Items = require('../models/Items')
const { default: mongoose } = require('mongoose')
const { nextDay } = require('date-fns')
const AppError = require('../utilities/appError');

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

router.get('/products', asyncHandler(async (req, res) => {
    const allItems = await Items.find({})

    if (!allItems?.length) {
        return res.status(400).json({ message: 'No Products found' })
    }
    res.status(200).json(allItems)
}))

router.get('/products/:id', asyncHandler(async (req, res, next) => {
    console.log(mongoose.Types.ObjectId.isValid(req.params.id))

    if(mongoose.Types.ObjectId.isValid(req.params.id) === false){
        return next(new AppError('Invalid Product ID',500))
    }

    const product = await Items.findById(req.params.id)
    res.status(200).json(product)
}))

module.exports = router