const { Router } = require('express')
const Purchase = require('../models/Purchase')
const sendMail = require('../mail');
const { log } = console

const router = Router()

router.get('/', async (req, res) => {
    try {
        const purchase = await Purchase.find({ user_id: req.user._id }).exec()
        if(!purchase) {
            throw new Error("No purchase")
        }
        res.status(200).json(purchase)
        
    } catch (error) {
        res.status(400).json({message: error})
    }
})

router.post('/', async (req, res, next) => {
    const { clothing, price, date, user_id, email } = req.body
    
    const newPurchase = new Purchase({ clothing, price, date, user_id: user_id })
    
    try {
        const purchase = await newPurchase.save()
        if (!purchase) {
            throw new Error("There was en error saving the purchase")
        }
        sendReceiptMail(purchase, email)
        res.status(200).json(purchase)
        return res.json({ message: 'Email sent!!!!!' });
        push
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

function sendReceiptMail(purchase, email) {
    const subject = "Receipt from The Prom Shop"
    const text = "Congratulations on your purchase of the " + purchase.clothing
                + "! The price is " + purchase.price + "$ which will be withdrawn" 
                + " from your account. You will receive the purchase in 1-3 days."

    sendMail(email, subject, text, function(err, data) {
        if (err) {
            log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        log('Email sent!!!');
    })    
}

module.exports = router

