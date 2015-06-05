/*Problem 7. First larger than neighbours

 Write a function that returns the index of the first element in array that is larger than its neighbours or -1,
 if there’s no such element.
 Use the function from the previous exercise.*/

function test() {
var array = document.getElementById('userArray').value.split(' ');
    alert(find(array));
}
function find(array) {
    for (var i = 2; i < array.length; i += 1) {
        if(array[i-2] < array[i-1] && array[i-1] > array[i]){
            return array[i-1];
        }
    }
    return -1;
}