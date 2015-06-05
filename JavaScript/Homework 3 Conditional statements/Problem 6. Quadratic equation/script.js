/*Problem 6. Quadratic equation

 Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
 Calculates and prints its real roots*/

function check() {
    var a = document.getElementById('a').value * 1,
        b = document.getElementById('b').value * 1,
        c = document.getElementById('c').value * 1,
        firstRoot = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a),
        secondRoot = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a),
        result = '',
        count = 2;//This is used to deside the final message ( 1 root or 2 roots)
    if (isNaN(firstRoot) == false) {
        result += 'x1:' + firstRoot;
    } else {
        count -= 1;
    }
    if (isNaN(secondRoot) == false) {
        result += ' x2:' + secondRoot;
    } else {
        count -= 1;
    }
    if (isNaN(firstRoot) && isNaN(secondRoot)) {
        alert('There are no real roots');
    } else {
        if (count == 2) {
            alert('There are 2 real roots ' + result);
        }
        if (count < 2) {
            alert('There is 1 real root: ' + result);
        }

    }

}