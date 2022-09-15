const express = require('express');
const app = express();
const port = 3000;

//mongose
const { MongoClient, ObjectId } = require('mongodb');


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


// menambahkan data ke db ccolection pelajar SATU PERSATU
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

// db.collection('mahasiswa').insertMany(
//     [
//         {
//             nama:"Dede syarifudin",
//             email:"alhadid@gmail.com"
//         },
//         {
//             nama:"ahmad syarifudin",
//             email:"ahmad@gmail.com"
//         },
//         {
//             nama:"ipul gunawan",
//             email:"ipul@gmail.com"
//         }
//     ],

//     (error,result) => {
//         if(error){
//             console.log('data gagal ditambahkan ke data base')
//         }

//         console.log(result);
//     }
// )

// //menampilkan semua data yang ada di collection mahasiswa
// console.log(
//     db
//     .collection('mahasiswa')
//     .find()
//     .toArray((error,result) => {
//     console.log(result)
//     })
// )


//menampilkan  data  berdasarkan kriteria
// console.log(
//     db
//     .collection('mahasiswa')
//     .find({_id:ObjectId("6321f60021ccd0c3c26d1159")})
//     .toArray((error,result) => {
//     console.log(result)
//     })
// )

//mengubah data berdasarkan id
// const updatePromise = db.collection('mahasiswa').updateOne(
//     {
//         _id:ObjectId('6321f60021ccd0c3c26d1159')
//     },
//     {
//         $set:{
//             email:'acong@gmail.com'
//         }
//     }
// );

// updatePromise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error)
// })



//mengubah data lebih dari 1 ,berdasarkan kriteria
// db.collection('mahasiswa').updateMany(
//     {
//         nama :"bedoel"
//     },
//     {
//         $set:{
//             nama:"muadzin"
//         }
//     }
// )

//menghapus 1 data

// db.collection('mahasiswa').deleteOne(
//     {
//         _id:ObjectId('6321f6c1269f6fb0ec91424f')
//     },
// ).then((result) =>{
//     console.log(result)
// }).catch((eror) => {
//     console.log(eror)
// })

//menghapus lebih dari satu data
    db.collection('mahasiswa').deleteMany(
        {
            nama:'Dede syarifudin'
        },
    ).then((result) =>{
        console.log(result)
    }).catch((eror) => {
        console.log(eror)
    })
