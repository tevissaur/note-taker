const { EPERM } = require('constants')
const exp = require('constants')
const express = require('express')
// Will use this to equalize the dirname through different OS
const path = require('path')
const api = require('routes')

const PORT = 3001

const app = express()

// Boilerplate middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use()

app.use(express.static('public'))


app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))