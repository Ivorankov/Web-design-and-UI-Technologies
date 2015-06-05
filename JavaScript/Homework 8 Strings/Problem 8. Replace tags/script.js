/*Problem 8. Replace tags

 Write a JavaScript function that replaces in a HTML document given as string all the tags
 <a href="…">…</a> with corresponding tags [URL=…]…/URL].*/
function test() {
    var result = '';
        test = '<p>Please visit <a href="http://academy.telerik.com">our site</a>' +
        ' to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
    result = replaceAll(test,'<a','[URL');
    result = replaceAll(result,'</a>','[/URL]');
    alert(result);
}
function replaceAll (text, toReplace, replacement) {//As seen in Problem 5.....
    var regex = new RegExp(toReplace, 'gi');
    return text.replace(regex, replacement);
}
