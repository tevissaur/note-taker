const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid')
const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.urlencoded( { extended: true } ))

app.get('/notes', (req, res) => {
    readFromFile('./db/db.json')
        .then((data) => res.json(JSON.parse(data)))
})

app.post('/notes', (req, res) => {
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
        res.end()
    }
})

app.delete('/notes/:id', (req, res) => {
    const { id } = req.params
    fs.readFile('./db/db.json', (err, data) => {
        const db = JSON.parse(data)
        // console.log(id, db)
        const newDb = db.filter((value, index, array) => {
            // console.log(value, id)
            return value.id != id
        })
        // console.log(newDb)
        writeToFile('./db/db.json', newDb)
    })
    res.end()
})



module.exports = app



