const express = require("express");

const app = express()


app.get('/', (req, res) => {
    res.send('Hello world')
})
app.get('/ping', (req, res) => {
    res.send('Pong')
})

var number = 1;
let bool = true;
const string = "HELLO";

let obj = {
    key: "object"
}

var d = function datatype () {
    return true;
}

console.log("Must be number: ", typeof number);
console.log("Must be boolean: ", typeof bool);
console.log("Must be string: ", typeof string);
console.log("Must be object: ", typeof obj);
console.log("Must be function: ", typeof d);
console.log(x);
const x = "texx";
console.log(x);



app.listen(8080)