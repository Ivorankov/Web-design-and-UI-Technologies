/*Problem 5. Third bit
 Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
 The bits are counted from right to left, starting from bit #0.
 The result of the expression should be either 1 or 0.*/

function check() {
    var bin = document.getElementById('binNum').value;
    var blank = 1 << 3;
    var final = (bin & blank) >> 3;
    if (final == 1) {
        alert('True, bit number 3 is 1!');
    }
    else {
        alert('False, bit number 3 is 0!');
    }


}
