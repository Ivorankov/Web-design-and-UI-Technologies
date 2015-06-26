/*Problem 1. English digit

 Write a function that returns the last digit of given integer as an English word.*/

function spell() {
    var userNum = document.getElementById('userNum').value * 1,
        digit = 0;
    digit = userNum % 10;
    switch (digit) {
        case 1:
            alert('One');
            break;
        case 2:
            alert('Two');
            break;
        case 3:
            alert('Three');
            break;
        case 4:
            alert('Four');
            break;
        case 5:
            alert('Five');
            break;
        case 6:
            alert('Six');
            break;
        case 7:
            alert('Seven');
            break;
        case 8:
            alert('Eight');
            break;
        case 9:
            alert('Nine');
            break;
        case 0:
            alert('Zero');
            break;
        default:
            alert('An error occurred :P');
    }
}