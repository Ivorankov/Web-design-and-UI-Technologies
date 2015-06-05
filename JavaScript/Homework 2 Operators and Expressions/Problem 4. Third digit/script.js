/*Problem 4. Third digit
 Write an expression that checks for given integer if its third digit (right-to-left) is 7.*/

function check() {
    var x = document.getElementById('num').value;
    y = 0;
    if (x.length < 3) {
        alert('False! There is no 3rd digit!');
    }
    else {
        x = ~~(x / 100);//this cuts 2 digits from the number(division without remainder...)
        if (x % 10 == 7) {
            alert('True');
        }
        else {
            alert('False');
        }
    }
}