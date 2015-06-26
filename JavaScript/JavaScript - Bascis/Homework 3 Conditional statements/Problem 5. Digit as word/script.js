/*Problem 5. Digit as word

Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English).
Print “not a digit” in case of invalid input.
    Use a switch statement.*/

function talkBack(){
    var x = document.getElementById('digit').value * 1;
    switch (x){
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
        default :
            alert('Whuuut?');
    }
}