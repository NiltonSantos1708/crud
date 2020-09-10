const express = require('express') 
const app = express()
const bodyParse = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const uri = mongodb+srv://<username>:<password>@cluster0.vkbem.mongodb.net/<dbname>?retryWrites=true&w=majority

app.listen(3000, function(){
    console.log('rodando...')
})

app.get('/',(req,res) => {
    res.render('index.ejs')
})

app.set('view engine', 'ejs')

