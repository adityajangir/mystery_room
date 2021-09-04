const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");




mongoose.connect('mongodb://localhost:27017/msdb');
const msdbSchema = mongoose.Schema({
  _id: String,
  noofsquares: Number,
  namesmh: Number,
  savebees: Number,
  threedc: String
})


const Answer = mongoose.model('Answer', msdbSchema);



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));


app.get("/", function(req,res){

  var ans = new Answer({
    _id: "adityajan"
  });
  res.render("index");
});


app.post('/locker1', function(req,res){
  const l1q1res = req.body.l1q1
  Answer.updateOne(
    { _id: "adityajan" },
    { $set: { namesmh: l1q1res  }},
  ).exec();
  res.redirect("/")
})


app.post('/locker2', function(req,res){
  const l2q1res = req.body.l2q1
  Answer.updateOne(
    { _id: "adityajan" },
    { $set: { noofsquares: l2q1res  }},
  ).exec();
  res.redirect("/")
})



app.post('/door1', function(req,res){
  const dq1res = req.body.dq1
  Answer.updateOne(
    { _id: "adityajan" },
    { $set: { savebees: dq1res }},
  ).exec();
  res.redirect("/")
})


app.post('/cabinet1', function(req,res){
  const cq1res = req.body.cq1
  Answer.updateOne(
    { _id: "adityajan" },
    { $set: { threedc: cq1res }},
  ).exec();
  res.redirect("/")
})


app.listen(3000,function(){
  console.log("Server started at port 3000")
})
