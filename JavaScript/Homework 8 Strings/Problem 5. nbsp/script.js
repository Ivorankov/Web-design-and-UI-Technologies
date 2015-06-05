/*Problem 5. nbsp

Write a function that replaces non breaking white-spaces in a text with &nbsp;*/
//WTH does "non breaking" white spaces mean?

function test(){
    var text = 'Test text are there any whitespaces here?';
    alert(replaceAll(text, ' ', '&nbsp;'));
}
function replaceAll (text, toReplace, replacement) {
    var regex = new RegExp(toReplace, 'gi');
    return text.replace(regex, replacement);
}