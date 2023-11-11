const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')
const LocalStrategy = require('passport-local')
const expressSession = require('express-session')
const User = require('./models/user')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render("home")
})

app.get('/tarefas', (req, res) => {
    res.render("tarefas")
})

app.get('/tarefas/new', (req, res) => {
    
})

app.listen(3000, () => {
    console.log("Servidor ligado na porta 3000!")
})