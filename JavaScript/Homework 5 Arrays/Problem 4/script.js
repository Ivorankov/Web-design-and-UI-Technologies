/*Problem 4. Maximal increasing sequence

 Write a script that finds the maximal increasing sequence in an array.*/
function findSequence() {
    var sequence = document.getElementById('sequence').value.split(' '),
        selectedChars = [],
        finalChars = [],
        previousChar = ' ',
        count = 0,
        finalCount = 0,
        indexKeeper = 0,
        result = ' ';
    for (var i = 1; i < sequence.length; i += 1) {
        previousChar = sequence[i - 1];
        if (sequence[i] > previousChar) {
            count += 1;
            if (finalCount < count) {//Same logic as the previous (Problem 3)
                selectedChars.push(previousChar);
                finalChars = selectedChars;//finalChars is used to store the final sequence (The greatest one)
                finalCount = count;
                indexKeeper = i;//Used to add the last element of the sequence later.(Otherwise it wont go in the array)
            }
        }
        else {
            selectedChars = [];
            count = 0;
        }
    }
    finalChars.push(sequence[indexKeeper]);//Last element of the sequence added.
    alert('Here is the sequence: ' + selectedChars);
}
