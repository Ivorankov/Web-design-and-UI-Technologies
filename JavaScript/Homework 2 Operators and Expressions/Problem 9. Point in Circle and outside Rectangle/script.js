/*Problem 9. Point in Circle and outside Rectangle
 Write an expression that checks for given point P(x, y) if it is within the
 circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).*/

function check() {
    var x = document.getElementById('x').value * 1;
    var y = document.getElementById('y').value * 1;
    var isInCircle = false;
    var isOutRect = true;
    var circleCheck = Math.sqrt(Math.pow((x - 1), 2) + Math.pow((y - 3), 2));
    if (circleCheck <= 3) {
        isInCircle = true;
    }
    if ((x >= -1 && x <= 5) && (y <= 1 && y >= -6)) {
        isOutRect = false;
    }
    if (isInCircle == true && isOutRect == true) {
        alert('Yes')
    }
    else {
        alert('No')
    }
}