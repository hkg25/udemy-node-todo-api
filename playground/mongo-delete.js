const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
        return console.log("Unable to connect with MongoDB server");
    }
    console.log("Connected to MongoDB server");

    //Delete many
    // db.collection("Todos").deleteMany({text:"Eat lunch"}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log(err);
    // })

    //Delete one
    // db.collection("Todos").deleteOne({text:"Eat lunch"}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log(err);
    // })

    // find one and delete
    // db.collection("Todos").findOneAndDelete({completed:false}).then((result)=>console.log(result),
    // (err)=>console.log(err));


    db.collection("Users").findOneAndDelete({_id:new ObjectID("5a1a2f5d9d55241f046716dd")}).then((result)=>console.log(result),
    (err)=>console.log(err));

    //db.close(); 

});