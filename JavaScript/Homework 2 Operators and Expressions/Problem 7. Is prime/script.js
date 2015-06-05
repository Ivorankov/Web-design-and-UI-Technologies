/*
 Problem 7. Is prime
 Write an expression that checks if given positive integer number n (n ? 100) is prime.
 */

function showValue(newValue) {
    document.getElementById('value').innerHTML = newValue;
}
function checkIfPrime() {
    var num = document.getElementById('num').value;
    for (var n = 2; n < num; n += 1) {
        if (num % n == 0) {
            alert('(FALSE) The number is not prime!)');
            return;
        }
    }
    alert('The number is prime! ("Sayd Optimus Prime")');
}