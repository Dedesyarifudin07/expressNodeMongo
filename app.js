const express = require('express');
const app = express();
const port = 3000;

//mongose
const { MongoClient } = require('mongodb');


//routes
app.get('/',(req,res) => {
    res.send('ini adalah halaman home')
})


//connect to db
mongoose.connect('mongodb://localhost:27017/pelajar')
 const db = mongoose.connection



//'listen 
app.listen(port,(req,res) => {
    console.log(`server telah berjalan di port ${port}`);
})