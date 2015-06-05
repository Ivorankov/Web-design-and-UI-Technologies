/*Problem 3. Min/Max of sequence

 Write a script that finds the max and min number from a sequence of numbers.*/

function findNumbers() {
    var array = [];
    var x = document.getElementById('userNumbers').value;
    array = x.split(' ');//Splits the string from the user input and puts all the numbers in an array
    var minNum = array[0];//both numbers start from the 1st element of the array
    var maxNum = array[0];
    for (var i = 0; i <= array.length; i += 1) {
        if (maxNum < array[i]) {//if the next number in the array is greater or equal we set its value to maxNum
            maxNum = array[i];
        }
        if(minNum > array[i]){//same logic here only the opposite
            minNum = array[i];
        }
    }
    alert('The min number is: ' + minNum  + ' The max number is: ' + maxNum );
}