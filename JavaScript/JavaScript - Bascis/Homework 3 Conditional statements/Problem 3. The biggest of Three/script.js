/*
 Problem 3. The biggest of Three

 Write a script that finds the biggest of three numbers.
 Use nested if statements.
 */

function check() {
    var x = document.getElementById('x').value * 1,
        y = document.getElementById('y').value * 1,
        z = document.getElementById('z').value * 1;
    if (x > y) {
        if (x > z) {
            alert(x + ' Is the biggest');
        }
    }
    if (y > x) {
        if (y > z) {
            alert(y + ' Is the biggest');
        }
    }
    if (z > x) {
        if (z > y) {
            alert(z + ' Is the biggest');
        }
    }
    if (x == y && y == z) {
        alert('The numbers are equal, I think :P');
    }
}