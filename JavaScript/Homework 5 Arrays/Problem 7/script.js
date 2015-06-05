/*Problem 7. Binary search

 Write a script that finds the index of given element in a sorted array of integers
 by using the binary search algorithm.*/
function findNumber() {
    var array = document.getElementById('sequence').value.split(' '),
        searchNum = document.getElementById('searchNum').value,
        minIndex = 0,
        maxIndex = array.length - 1,
        currentIndex,
        currentNum;
    while (minIndex <= maxIndex) {

        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentNum = array[currentIndex];
        if(currentNum < searchNum){
            minIndex = currentIndex +1;
        } else if(currentNum > searchNum){
            maxIndex = currentIndex -1;
        }
        else{
            alert(searchNum + ' is located at index: ' + currentIndex);
            return;
        }
    }
    alert(searchNum + ' is not found in the array!');
}

