/*
 Problem 6. Point in Circle
 Write an expression that checks if given point P(x, y) is within a circle K(O, 5).
 */
function check() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var result = Math.sqrt(Math.pow((x - 0), 2) + Math.pow((y - 5), 2));
    if (result <= 5) {
        alert('(TRUE) Your point is in the circle.')
    }
    else {
        alert('(FALSE) Your point is not within the circle.')
    }
}