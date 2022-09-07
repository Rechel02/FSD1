const exp=require('express')
const m=require('mongoose')
const url='mongodb://localhost/cbit'
m.connect(url,{useNewUrlParser:true})
const con=m.connection
const app=exp();
app.use(exp.json())
const r=require('./controller/controller')
app.use('/student',r)
con.on('open',function(){
    console.log("welcome")
})

app.listen(9000,()=>(
    console.log("server connected")
))