/*Problem 5. Selection sort

 Sorting an array means to arrange its elements in increasing order.
 Write a script to sort an array.
 Use the selection sort algorithm: Find the smallest element, move it at the first position,
 find the smallest from the rest, move it at the second position, etc.*/

function sort() {
    var unsortedArray = document.getElementById('sequence').value.split(' '),
        sortedArray = [],
        selectedNumber = 0,
        indexKeeper = 0;
    for (var j = 0; j < unsortedArray.length; j += 1) {
        selectedNumber = unsortedArray[indexKeeper];
        for (var i = 0; i < unsortedArray.length; i += 1) {
            if (selectedNumber > unsortedArray[i]) {
                selectedNumber = unsortedArray[i];
            }
            if (i === unsortedArray.length - 1) {//This prevents adding multiple values to the array
                sortedArray.push(selectedNumber);
                unsortedArray[unsortedArray.indexOf(selectedNumber)] = undefined;//That huge thing in the index finds at
            }                                                                   //what index our min number is located
        }
        if(unsortedArray[indexKeeper] == undefined){//If the number we use to compare was not the lowest one its value is kept.
            indexKeeper +=1;//If it was the min number we move on to the next number(as the lowest number from the initial
        }                   //array is set to undefind(to prevent duplicates)
    }
    alert(sortedArray);
}