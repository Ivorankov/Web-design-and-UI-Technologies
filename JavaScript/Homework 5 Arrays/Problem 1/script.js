/*Problem 1. Increase array members

 Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
 Print the obtained array on the console.("On" the console?)*/

function generateArray() {
    var array = [];
    for (var i = 1; i <= 20; i += 1) {
        array[i] = i * 5;
    }
    alert('Here is the array: ' + array);
    console.log(array);//This is the first time I put stuff in the console yey
}