/*Problem 2. Reverse number

 Write a function that reverses the digits of given decimal number.*/
function test() {
    var userNum = document.getElementById('userNum').value;
    alert(reverse(userNum));
}
function reverse(number) {
    var result = '',
        array = number.split('');
    for (var i = array.length-1; i >= 0; i -= 1) {
        result += array[i];
    }
    return result;//Initially I wanted to use math to solve this task, then I found out JS cant do math for s***..
}