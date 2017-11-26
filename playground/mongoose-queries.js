const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/Todo");

var id = "6a1a7a585b955208881a37c0";

if(!ObjectID.isValid(id)){
    console.log("Id not valid");
}

Todo.find({
    _id:id
}).then((todos)=>{
    console.log("Todos :" ,todos);
},(err)=>{
    console.log(err);
})

Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log("Todo :" ,todo);
},(err)=>{
    console.log(err);
})

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log("Id not found");
    }
    console.log("Todo :" ,todo);
}).catch((err)=>{
    console.log(err); 
})