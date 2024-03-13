const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const path = require('path')
const Items = require('../models/Items')

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

router.get('/products/:id', asyncHandler(async (req, res) => {
    const product = await Items.findById(req.params.id)
    res.status(200).json(product)
}))

module.exports = router