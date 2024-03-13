const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const itemSchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true
        },
        retailerPrices: [
            {
                retailer: {
                    type: String,
                    required: true
                },
                prices: {
                    type: Number,
                    required: true
                }
            }
        ],
        image_URL: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    }
)

itemSchema.plugin(AutoIncrement, {
    inc_field: 'itemID',
    id: 'itemIDNums',
    start_seq: 1

})

module.exports = mongoose.model('Item', itemSchema)