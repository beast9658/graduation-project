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

/* Detail.insertMany([
  {
        id:"0",
        time:"2019.01.01",
        author:"sdsaeqweqe",
        tag:"dsa,dsa,weq",
        detail:"11111111111首先，我们称呼 routes 配置中的每个路由对象为 路由记录。路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录例如，根据上面的路由配置，/foo/bar 这个 URL 将会匹配父路由记录以及子路由记录。一个路由匹配到的所有路由记录会暴露为 $route 对象 (还有在导航守卫中的路由对象) 的 $route.matched 数组。因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。下面例子展示在全局导航守卫中检查元字段："
      },
      {
        id:"1",
        time:"2019.11.01",
        author:"sdfasdfqe",
        tag:"dsa,dsa,weq,dsadas",
        detail:"11111111111首先，我们称呼 rosdoiuagdoiausbdoaisbdaiuowhd配多个路由记录例如，根据上面的路由配置，/foo/bar 这个 URL 将会匹配父路由记录以及子路由记录。一个路由匹配到的所有路由记录会暴露为 $route 对象 (还有在导航守卫中的路由对象) 的 $route.matched 数组。因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。下面例子展示在全局导航守卫中检查元字段："
      },
      {
        id:"2",
        time:"2019.11.11",
        author:"sdfasdfqe",
        tag:"dsa,dsa,weq,dsadas",
        detail:"1oiuagdoiasaodhai我哦对哈撒多，/foo/bar 这个 URL 将会匹配父路由记录以及子路由记录。一个路由匹配到的所有路由记录会暴露为 $route 对象 (还有在导航守卫中的路由对象) 的 $route.matched 数组。因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。下面例子展示在全局导航守卫中检查元字段："
      },
      {
        id:"3",
        time:"2119.11.01",
        author:"sdfasdfqe",
        tag:"dsa,dsa",
        detail:"11111111111首先，我们称呼 rosdoiuagdoiausbdoaisbdaiuowhd配多个路111111111首先，我们称呼 rosdoiuagdoiausbdoaisbdaiuowhd配多个路由记录例如，根据上面的路111111111首先，我们称呼 rosdoiuagdoiausbdoaisbdaiuowhd配多个路由记录例如，根据上面的路111111111首先，我们称呼 rosdoiuagdoiausbdoaisbdaiuowhd配多个路由记录例如，根据上面的路111111111首先，我们称呼 rosdoiuagdoiausbdoaisbdaiuowhd配多个路由记录例如，根据上面的路111111111首先，我们称呼 rosdoiuagdoiausbdoaisbdaiuowhd配多个路由记录例如，根据上面的路由记录例如，根据上面的路由配置，/foo/bar 这个 URL 将会匹配父路由记录以及子路由记录。一个路由匹配到的所有路由记录会暴露为 $route 对象 (还有在导航守卫中的路由对象) 的 $route.matched 数组。因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。下面例子展示在全局导航守卫中检查元字段："
      }
]) */

app.listen (3000, () =>{
  console.log('on 3000')
})