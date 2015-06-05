/*Problem 1. Odd or Even
 Write an expression that checks if given integer is odd or even.*/

function check() {
    if (document.getElementById("num").value % 2 == true) {
        alert('Yes, Its odd')
    }
    else {
        alert('Nope, Its even')
    }
}

