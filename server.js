const express = require('express')
// Will use this to equalize the dirname through different OS
const path = require('path')
const api = require('./routes/notes')

const PORT = process.env.PORT || 3001;

const app = express()

// Boilerplate middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use('/api', api)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})


app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))