var express = require("express");
var app = express();
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
];
var colors = ["rgb(17, 32, 113)", "rgb(242, 52, 10)","rgb(129, 227, 10)","rgb(168, 20, 131)","rgb(100, 241, 237)"];

app.listen(4000, function(){
  console.log("stuff is working");
});

app.get("/", function( req, res ){
  var compliment = compliments[Math.floor(Math.random() * compliments.length)];
  var color = colors[Math.floor(Math.random() * colors.length)];
  res.render("index.hbs", {compliment: compliment, color: color});
})

app.get("/:name", function( req, res ){
  var compliment = compliments[Math.floor(Math.random() * compliments.length)];
  var color = colors[Math.floor(Math.random() * colors.length)];
  var name = req.params.name;
  res.render("name.hbs", {compliment: compliment, color: color, name: name});
})

app.post("/:name/new", function( req, res ){
  var name = req.params.name;
  compliments.push(req.body.name);
  res.redirect("/" + name);
})
