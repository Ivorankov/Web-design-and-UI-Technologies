/*Problem 1. Exchange if greater
 Write an if statement that takes two double variables a and b and exchanges their values
 if the first one is greater than the second.
 As a result print the values a and b, separated by a space.*/

function check() {
    var x = document.getElementById('x').value * 1,
        y = document.getElementById('y').value * 1,
        temp = 0;
    if (x > y) {
        temp = x;
        x = y;
        y = temp;
    }
    alert(x + ' ' + y);
}