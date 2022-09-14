const express = require('express');
const app = express();
const port = 3000;

//routes
app.get('/',(req,res) => {
    res.send('ini adalah halaman home')
})


//'listen 
app.listen(port,(req,res) => {
    console.log(`server telah berjalan di port ${port}`);
})