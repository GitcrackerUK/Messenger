const express = require('express');
const cors = require('cors') ; // !
const mongoose = require('mongoose')
require('dotenv').config();


const app = express()
const port = process.env.PORT || 5000

app.use(cors()); //!
app.use(express.json()); //!

app.listen(port,()=>{
    console.log(`Server runs on port: ${port}`)
})

const URI = process.env.ATLAS_URI;
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})

const UserChat = require('./routes/chat')

app.use('/chat', UserChat); 

app.get('/', (req, res) => {
    res.send('Hello World!')
})