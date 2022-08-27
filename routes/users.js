const express = require('express')
const router = express.Router()


//Get all users Route
router.get('/', (req, res) => {
    res.render('users/index')
})

//New user Route
router.get('/new', (req, res) => {
    res.render('users/new')
})

//Create User Route
router.post('/', (req, res)=> {
    res.send('Create new user')
})

module.exports = router