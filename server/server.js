var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/Todo");
var {User} = require("./models/User");

var app = express();

app.use(bodyParser.json());

app.post("/todos",(req,res)=>{

    var todo = new Todo({
        text : req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc)
    },(err)=>{
        res.status(400).send(err);
    })

});

app.get("/todos",(req,res)=>{

    Todo.find().then((todos)=>{
        res.send({
            todos : todos,
            status : "Success"
        })
    },(e)=>{
        res.status(400).send(e);
    })

});

app.listen(3000,()=>{
    console.log("Server is up on 3000");
})