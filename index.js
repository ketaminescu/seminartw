// const express = require("express");

// const app = express()


// app.get('/', (req, res) => {
//     res.send('Hello world')
// })
// app.get('/ping', (req, res) => {
//     res.send('Pong')
// })

// var number = 1;
// let bool = true;
// const string = "HELLO";

// let obj = {
//     key: "object"
// }

// var d = function datatype () {
//     return true;
// }

// console.log("Must be number: ", typeof number);
// console.log("Must be boolean: ", typeof bool);
// console.log("Must be string: ", typeof string);
// console.log("Must be object: ", typeof obj);
// console.log("Must be function: ", typeof d);


const elements = ["This", "is", "a", "test"]
console.log(elements.join(' '));

const express = require("express")
const req = require("express/lib/request")

const app = express()


function occurences(text, character){
    console.log(text.split(character).length-1)
    return text.split(character).length - 1;
}

console.log(occurences("sample texte", "e"));

const input = [2, 4, 6, 7, 8]

function elemPare(input,arg)  {
    const output = []
    for(let i = 0; i<input.length;i++)
    {
        if(input[i]%arg==0)
        {
            output.push(input[i])
        }

    }
    return output;
}


console.log(elemPare(input));


function addToArray(array, ...args) {    
    for ( var i = 0; i < args.length; i++){
        if(args[i]%2==0)
        {
            array.push(args[i]);
        }
        
    }
    return array;
}

const array = []

console.log(addToArray(array,2,3,4,5,6,7,8,10,9,123,32,18))



const sentance = ['the', 'quick', 'brown', 'fox', 'jumps','over','the','lazy','dog'];
const newarr = [];





app.get('/', (req, res) => {
    res.write("sal")
})


app.listen(8080)