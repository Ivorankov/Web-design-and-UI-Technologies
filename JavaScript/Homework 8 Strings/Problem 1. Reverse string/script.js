/*Problem 1. Reverse string

 Write a JavaScript function that reverses a string and returns it*/

function reverse() {
    var string = document.getElementById('string').value;
    alert(string.split('').reverse().join(''));//The best method for lazy ppl :D
}