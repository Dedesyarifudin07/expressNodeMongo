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
const uri = 'mongodb://127.0.0.1/27017';
const dbName = 'Pelajar';
const client = new MongoClient(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

client.connect((error,client) => {
    if(error){
        return console.log('koneksi gagal');
    }

    console.log('onneksi berhasil')
})  

//'listen 
app.listen(port,(req,res) => {
    console.log(`server telah berjalan di port ${port}`);
})


//pilih database
const db = client.db(dbName)


//menambahkan data ke db ccolection pelajar SATU PERSATU
// db.collection('mahasiswa').insertOne(
//     {
//         nama:"erik",
//         email:"erik@gmail.com"
//     },
//     (error,result) => {
//     if(error){
//         console.log('data gagal ditambahkan')
//     }

//     console.log(result)

//    }
// )


//menambahkan data ke db dengan cara langsung banyak

db.collection('mahasiswa').insertMany(
    [
        {
            nama:"Dede syarifudin",
            email:"alhadid@gmail.com"
        },
        {
            nama:"ahmad syarifudin",
            email:"ahmad@gmail.com"
        },
        {
            nama:"ipul gunawan",
            email:"ipul@gmail.com"
        }
    ],

    (error,result) => {
        if(error){
            console.log('data gagal ditambahkan ke data base')
        }

        console.log(result);
    }
)