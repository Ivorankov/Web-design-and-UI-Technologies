/*Problem 3. Maximal sequence

 Write a script that finds the maximal sequence of equal elements in an array.*/

function findChar() {
    var sequence = document.getElementById('sequence').value.split(' '),
        selectedChar = ' ',
        previousChar = ' ',
        count = 0,
        finalCount = 0,
        result = '';
    for (var i = 1; i < sequence.length; i += 1) {
        previousChar = sequence[i - 1];
        if (previousChar == sequence[i]) {//when the previous char[i-1] is equal to the current[i]
            count += 1;//counts how many times equal elements are found ( but misses 1 count that is corrected later)
            if (count > finalCount) {//Prevents the loss of a sequence (only allows longer sequences to be recorded)
                finalCount = count;
                selectedChar = sequence[i];
            }
        }
        else {
            count = 0;//set to 0 (so it can count a new sequence, if there is one...)
        }
    }
    for (i = 0; i <= finalCount; i += 1) {//This for loop runs finalcount + 1 times to correct the count
        result += selectedChar + ' ';
    }
    alert('The longest sequence is ' + result);
}