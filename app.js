const Logic = require('./Logic')

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World' + value);
})

app.listen(3001)
// we import all the function in Logic into this variable called 'logic'
// this 'logic' variable is of the type of his class 'Logic'
// If we go to the Logic.js file, we can see all the functions that we can call
// one of those functions is pptr, and this is the function that will contain all our code related to puppeteer
// so, whenevre we want to control chrome, we will change some function in the Logic.js file
// (we could put all of the code related to chrome in the pptr function, but we can 54also have more than one function in Logic.js, and from here (app.js) we can call some of them whenevre we want)
const logic = new Logic();
// 'new' is an operator (you can see that it's in blue)
// this operator takes a class, and creates an instance of it.
// 'new' creates an instance of the class. so we have one specific dog. (or 'Logic')

var value;
(async function() {
  value = await logic.pptr(); 
})();

setInterval(function() { 
   value = logic.pptr(); 
}, 60000); // 1000 = 1 second




//keep process alive
setInterval(() => undefined, Number.POSITIVE_INFINITY);