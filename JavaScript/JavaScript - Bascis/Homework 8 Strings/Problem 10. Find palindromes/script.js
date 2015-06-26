/*Problem 10. Find palindromes

Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".*/

function test(){
    var words = 'ABBA lamal exe test ARA Shoe rar'.split(' '),
        array = [];
    for(var i in words){
        if((words[i].split('').reverse().join('')) === words[i]){
            array.push(words[i]);
        }
    }
    alert(array.join(' '));
}