/*
 Problem 2. Multiplication Sign

 Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
 Use a sequence of if operators.
 */

function check() {
    var x = document.getElementById('x').value * 1,
        y = document.getElementById('y').value * 1,
        z = document.getElementById('z').value * 1,
        count = 0;
    if (x < 0) {
        count += 1;
    }
    if (y < 0) {
        count += 1;
    }
    if (z < 0) {
        count += 1;
    }
    if (x == 0 || y == 0 || z == 0) {
        alert('ITS ZERO! (0)');
    } else if (count == 2 || count == 0) {
        alert('ITS PLUS! (+)');
    } else if (count == 1 || count == 3) {
        alert('ITS MINUS! (-)');
    }
}