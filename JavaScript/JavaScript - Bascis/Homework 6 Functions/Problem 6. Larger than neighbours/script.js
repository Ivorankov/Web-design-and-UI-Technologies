/*Problem 6. Larger than neighbours

Write a function that checks if the element at given position in given array
of integers is bigger than its two neighbours (when such exist).*/

function test(){
    var array = document.getElementById('userArray').value.split(' ');
    var searchIndex = document.getElementById('searchIndex').value * 1;
    alert(check(array,searchIndex));
}
function check(array, index){
    if(array.length -1 === index || index == 0){
        return('The number at index ' + index + ' does not have two neighbouring numbers!');
    }
    if(array[index] > array[index - 1] && array[index] >array[index + 1]){
        return 'Yes, It is.';
    } else{
        return 'No, It is not';
    }
}