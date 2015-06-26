/*Problem 6. Most frequent number

 Write a script that finds the most frequent number in an array.*/

function findNumber() {//Same logic as Problems 3 and 4
    var sequence = document.getElementById('sequence').value.split(' '),
        count = 0,
        finalCount = 0,
        previousChar = ' ',
        selectedChar = ' ';
    for (var i = 1; i < sequence.length; i += 1) {
        previousChar = sequence[i - 1];
        if (previousChar == sequence[i]) {
            count += 1;
            if (count > finalCount) {
                finalCount = count;
                selectedChar = previousChar;
            }
        }
        else {
            count = 0;
        }
    }
    finalCount += 1;
    alert('The most frequent number is: ' + selectedChar + ' spotted ' + finalCount + ' times.');
}

