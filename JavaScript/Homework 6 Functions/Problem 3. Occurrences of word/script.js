/*Problem 3. Occurrences of word

 Write a function that finds all the occurrences of word in a text.
 The search can be case sensitive or case insensitive.
 Use function overloading.*/

function test() {//Case sensitive
    var text = document.getElementById('text').value,
        searchWord = document.getElementById('searchWord').value;
    alert('Word spotted at indexes: '+ search(text, searchWord));
}
function test2(){//Case insensitive
    var text = document.getElementById('text').value.toLowerCase(),
        searchWord = document.getElementById('searchWord').value.toLowerCase();
    alert('Word spotted at indexes: '+ search(text, searchWord));
}
function search(text, word) {
    var locations = [];
    for (var i = text.indexOf(word); i !== -1; i = text.indexOf(word, i + 1)) {
        locations.push(i);
    }
    return locations;
}