const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    if(err){
        return console.log("Unable to connect with MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // find one and update
    // db.collection("Todos").findOneAndUpdate(
    //     {_id:new ObjectID("5a1a64eb46dbac965cf5540b")},
    //     { $set :{completed:true} },
    //     {
    //         returnOriginal : false
    //     }
    // ).then(
    //     (result)=>console.log(JSON.stringify(result,undefined,3)),
    //     (err)=>console.log(err)
    // );

    db.collection("Users").findOneAndUpdate(
        {_id:new ObjectID("5a1a5f5346dbac965cf55254")},
        { $set :{name : "Harish Garg"}, $inc :{age : 5} },
        {
            returnOriginal : false
        }
    ).then(
        (result)=>console.log(JSON.stringify(result,undefined,3)),
        (err)=>console.log(err)
    );

    //db.close(); 

});