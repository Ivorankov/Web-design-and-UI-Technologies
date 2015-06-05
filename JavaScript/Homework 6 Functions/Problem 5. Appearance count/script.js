/*Problem 5. Appearance count

 Write a function that counts how many times given number appears in given array.
 Write a test function to check if the function is working correctly.*/

function test() {
    var arrayOne = [1, 2, 3, 4, 5, 6, 6, 5, 1, 6, 12],// 6 - 3 times/ 5 - 2 times.
        arrayTwo = [21, -5, 56, 56, -5, -5, 4, 7, 56, 56],//56 - 4 times/ -5 - 3 times.
        searchNum1 = 6,
        searchNum2 = 5,
        searchNum3 = -5,
        searchNum4 = 56;
    if (count(arrayOne, searchNum1) === 3) {
        alert('Test 1:\n' + arrayOne + '\n' + 'Number ' + searchNum1 + ' found ' + count(arrayOne, searchNum1) + ' times');
    }
    if (count(arrayOne, searchNum2) === 2) {
        alert('Test 2:\n' + arrayOne + '\n' + 'Number ' + searchNum2 + ' found ' + count(arrayOne, searchNum2) + ' times');
    }
    if (count(arrayTwo, searchNum3) === 3) {
        alert('Test 3:\n' + arrayTwo + '\n' + 'Number ' + searchNum3 + ' found ' + count(arrayTwo, searchNum3) + ' times');
    }
    if (count(arrayTwo, searchNum4) === 4) {
        alert('Test 4:\n' + arrayTwo + '\n' + 'Number ' + searchNum4 + ' found ' + count(arrayTwo, searchNum4) + ' times')
    }
}
function count(array, number) {
    var count = 0;
    for (var i = 0; i < array.length; i += 1) {
        if (array[i] === number) {
            count += 1;
        }
    }
    return count;
}