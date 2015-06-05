/*Problem 2. Remove elements

 Write a function that removes all elements with a given value.
 Attach it to the array type.*/

function test() {
    var array = document.getElementById('userArray').value.split(' ');
    var elementToRemove = document.getElementById('element').value;
    alert('Your array: [' + array + ']');
    Array.prototype.remove = function () {
        var index = this.indexOf(elementToRemove);
        if (index > -1) {
            this.splice(index, 1);
        } else {
            return -1;
        }
    };
    if (array.remove(elementToRemove) == -1) {
        alert('The element you want to remove is not located in the array');
    } else {
        alert('Yor array after removing ' + elementToRemove + '\n  [' + array + ']');
    }
}



