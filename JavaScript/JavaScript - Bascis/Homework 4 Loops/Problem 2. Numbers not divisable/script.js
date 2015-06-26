/*Problem 2. Numbers not divisible

 Write a script that prints all the numbers from 1 to N,
 that are not divisible by 3 and 7 at the same time*/
//What do they mean by "at the same time ? All the numbers to be printed at the same time ?
//The check needs to happen at the same time as the printing? Should I know how to parallel program ?:O

function printTo() {
    var userNum = document.getElementById('userNum').value * 1;
    var i = 1;
    var result = ' ';
    if (userNum >= 1) {
        for (i; i <= userNum; i += 1) {//The for loop runs thru all the numbers from 1 to the select number
            if (i % 3 != 0 && i % 7 != 0) {
                result += i + ' ';//puts all the numbers in a string
            }
        }
    }
    else {
        for (i; i >= userNum; i -= 1) {//This is so it will work for negative numbers
            if (i % 3 != 0 && i % 7 != 0) {
                result += i + ' ';
            }
        }
    }
    alert(result);
}
