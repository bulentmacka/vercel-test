const express = require('express')

const app = express()
const dotenv = require('dotenv')
dotenv.config()


app.get('/',(req,res) => {
    res.send('<h1>Home Page</h1>')
})


app.get('/about',(req,res) => {
    res.send('<h1>About Page</h1>')
})


const port = process.env.PORT || 6161

app.listen(port,()=> {
    console.log(port)
    console.log('server is started..')
})