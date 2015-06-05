/*Problem 1. Numbers

 Write a script that prints all the numbers from 1 to N.*/

function printTo() {
    var userNum = document.getElementById('userNum').value * 1;
    var i = 1;
    var result = ' ';
    if (userNum >= 1) {
        for (i; i <= userNum; i += 1) {//for positive numbers
            result += i + ' ';//all the numbers are put in an string
        }
    }
    else {
        for (i; i >= userNum; i -= 1) {//for negative numbers
            result += i + ' ';
        }
    }
    alert(result);
}