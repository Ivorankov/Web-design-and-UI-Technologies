/*Problem 7. The biggest of five numbers

 Write a script that finds the greatest of given 5 variables.
 Use nested if statements.*/

function check() {
    var a = document.getElementById('a').value * 1,
        b = document.getElementById('b').value * 1,
        c = document.getElementById('c').value * 1,
        d = document.getElementById('d').value * 1,
        e = document.getElementById('e').value * 1;

    if (a >= b && a >= c && a >= d && a >= e) {
        alert(a + ' is the biggest number');
    }
    else if (b >= a && b >= c && b >= d && b >= e) {
        alert(b + ' is the biggest number');
    }
    else if (c >= b && c >= a && c >= d && c >= e) {
        alert(c + ' is the biggest number');
    }
    else if (d >= b && d >= c && d >= a && d >= e) {
        alert(d + ' is the biggest number');
    }
    else if (e >= b && e >= c && e >= d && e >= a) {
        alert(e + ' is the biggest number');
    }
}