/*Problem 2. Lexicographically comparison

 Write a script that compares two char arrays lexicographically (letter by letter).*/

var firstArray = ['z', 'a', 'c', 'd', 'e', 'f', '+', '+', 'r'],
    secondArray = ['a', 'b', 'c', 'g', 'f', 'f', '+', '-', 'r'],
    div1 = document.getElementById('p1'),//This part writes to the p tags in the html...
    div2 = document.getElementById('p2'),//Because I am too stupid to use copy/paste apparently.
    firstContent = document.createTextNode(firstArray.toString()),
    secondContent = document.createTextNode(secondArray.toString());
div1.appendChild(firstContent);
div2.appendChild(secondContent);

function compare() {
    var result = ' ';
    for (var i = 0; i < firstArray.length; i += 1) {
        if (firstArray[i] === secondArray[i]) {
            result += firstArray[i] + ' - ' + secondArray[i] + ' Equal chars at index[' + i + ']\n';
        }
    }
    alert(result);
}