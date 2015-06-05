/*Problem 8. Trapezoid area
 Write an expression that calculates trapezoid's area by given sides a and b and height h.*/

function calcArea() {
    var a = document.getElementById('a').value * 1;
    var b = document.getElementById('b').value * 1;
    var h = document.getElementById('h').value * 1;
    alert('The area is: ' + ((a + b) / 2) * h);
}