/*
 Problem 4. Sort 3 numbers

 Sort 3 real values in descending order.
 Use nested if statements.

 Note: Don’t use arrays and the built-in sorting functionality.*/
function sort() {
    var x = document.getElementById('x').value * 1,
        y = document.getElementById('y').value * 1,
        z = document.getElementById('z').value * 1;
    if (x >= y) {
        if (x > z && y >= z) {
            alert(x + ' ' + y + ' ' + z);
            return;
        } else if (x > z) {
            alert(x + ' ' + z + ' ' + y);
            return;
        }
    }
    if (y >= x) {
        if (y > z && z >= x) {
            alert(y + ' ' + z + ' ' + x);
            return;
        } else if (y > z) {
            alert(y + ' ' + x + ' ' + z);
            return;
        }
    }
    if (z >= x) {
        if (z > y && y >= x) {
            alert(z + ' ' + y + ' ' + x);
            return;
        } else if (z > y) {
            alert(z + ' ' + x + ' ' + y);
            return;
        }
    }
    if (x == y == z) {
        alert(x + ' ' + y + ' ' + z);
    }
}