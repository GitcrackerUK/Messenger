const express = require('express')
const app = express()
const port = 5000
app.get('/',(req,res)=>{
    console.log(`App listen on port ${port}`)
    res.send('hello world')
})

app.listen(port)