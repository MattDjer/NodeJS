const { Router } = require('express')
const passport = require('passport')
const { UserExistsError } = require('passport-local-mongoose/lib/errors')
const User = require('../models/User')

const router = Router()

router.get('/user', (req, res) => {
    if(req.user) {
        res.json(extractUser(req))
    } else {
        res.json({user: null})
    }
})

router.post(
    '/sign-up',
    async (req, res, next) => {
        const {username, password} = req.body
        try {
            await User.register({ username }, password)
        } catch (error) {
            if (error.name === 'UserExistsError') {
                return res.status(400).json({ message: "UserExistsError" })
            }
            return res.status(500).json({message: "There was an error when signing up"})        
        }
    next()
    }, 
    passport.authenticate('local'), 
    (req, res) => {
        res.json(extractUser(req))
    }
)

router.post('/logout', (req, res) => {
    if(req.user) {
        req.logOut()
        res.json({message: "Logged out"})
    } else {
        res.json({message: 'No user to log out'})
    }
})

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json(extractUser(req))
})

router.post('/update-password', (req, res, next) => {
    if(!req.user) {
        return res.send({message: 'No user to change password'})
    }
    next()
}, async (req, res) => {
    const { oldPassword, newPassword } = req.body
    if(!oldPassword || !newPassword) {
        return res.status(400).json({message: "Invalid Request"})
    }
    try {
        const user = await User.findById(req.user._id)
        await user.changePassword(oldPassword, newPassword)
        res.json({message: "success"})
    } catch (error) {
        if(error.name === 'IncorrectPasswordError') {
            return res.status(400).json({message: 'IncorrectPasswordError'})
        }
        return res.status(500).json({message: "There was an error"})
    }
})

function extractUser(req) {
    const {username, _id} = req.user
    return {user: { username, _id } }
}

router.post('/retrieve-password'), async (req, res) => {
    console.log("TEST")
}

module.exports = router