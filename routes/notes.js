const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid')
const router = require('express').Router()
const fs = require('fs')


router.get('/notes', (req, res) => {
    readFromFile('./db/db.json')
        .then((data) => res.json(JSON.parse(data)))
})

router.post('/notes', (req, res) => {
    console.log(req.body)
    const { title, text } = req.body
    
    if (req.body) {

        const newNote = {
            title,
            text,
            id: uuid()
        }

        readAndAppend(newNote, './db/db.json')
        res.json('Note added')
    } else {
        res.send('Error in adding new note')
    }
})

router.delete('/notes/:id', (req, res) => {
    const { id } = req.params
    for (let i = 0; i < readFromFile; i++) {
        
    }
    writeToFile('./db/db.json')
    res.end()
})



module.exports = router



