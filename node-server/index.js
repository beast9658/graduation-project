const express = require("express")

const app = express()

const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/server', { useNewUrlParser: true })
const List = mongoose.model('List', new mongoose.Schema({
    src:String,
    title:String
}))
const View = mongoose.model('View', new mongoose.Schema({
  src:String,
  message:String,
  title:String
}))
const Detail = mongoose.model('Detail', new mongoose.Schema({
  id:String,
  time:String,
  author:String,
  tag:String,
  detail:String
}))


app.use(require('cors')())
app.use(express.static('public'))

app.get('/api/gamelist', async function(req, res){
  res.send(await List.find())
}),
app.get('/api/gameview', async function(req, res){
  res.send(await View.find())
}),
app.get('/api/gamedetail/:index', async function(req, res){
  res.send(await Detail.find().where({
    index:"0"
  }))
})

// View.insertMany([

// ])

app.listen (3000, () =>{
  console.log('on 3000')
})