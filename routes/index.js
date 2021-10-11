const router = require('express').Router()
// const addNote
// const sendNote





router.use('/notes', (req, res)=> {
    console.log('index working')
    res.send('Index working!')
})






module.exports = router