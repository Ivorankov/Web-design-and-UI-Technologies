/*Problem 2. Divisible by 7 and 5
Write a boolean expression that checks for given integer if it can be divided
(without remainder) by 7 and 5 in the same time.*/

function check(){
    var number = document.getElementById('num').value;
    if(number % 5 == 0 && number % 7 == 0){
        alert('Yep its divisable by both...True!');
    }
    else{
        alert('Nope its not... False! ');
    }
}