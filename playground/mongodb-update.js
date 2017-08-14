//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("599011c2373c2b6ee20625fa")
  // },{
  //   $set:{
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((results)=>{
  //   console.log(results);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('598eb59a9b01f617902d0b5d')
  },{
    $set:{
      name: 'Andrew'
    },
    $inc:{
      age: 1
    }
  },{
    returnOriginal: false
  }).then((results)=>{
    console.log(results);
  });
  //db.close();
});
