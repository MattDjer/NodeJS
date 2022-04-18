const {Schema, model} = require('mongoose')

const now = new Date().getTime()
const PurchaseSchema = new Schema({
    clothing: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: Number,
        default: now
    }, 
    user_id: {
        type: String, 
        required: true,
    }
})

const Purchase = model('purchase', PurchaseSchema)

module.exports = Purchase