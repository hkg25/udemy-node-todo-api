//const MongoClient = require("mongodb").MongoClient;

const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
        return console.log("Unable to connect with MongoDB server");
    }
    console.log("Connected to MongoDB server");

    db.collection("Todos").insertOne(
        {text : "Something to do", completed : false},
        (err,result)=>{
            if(err){
                return console.log("Unable to insert into Todo");
            }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.collection("Users").insertOne(
        {name : "Harish Garg", age : 27, location : "D-8 Uppal Southend Gurgaon"},
        (err,result)=>{
            if(err){
                return console.log("Unable to insert into Users");
            }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.close(); 

});