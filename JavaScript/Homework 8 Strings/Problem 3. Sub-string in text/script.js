/*Problem 3. Sub-string in text

 Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).

 Example:

 The target sub-string is in

 The text is as follows: We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.

 The result is: 9*/

function test() {
    var test1 = "The text is as follows: We are living in an yellow submarine. We don't have anything else." +
        "inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.";
    var test2 ='This is some other text that sOmEHOW will test SOME case insensitive search some some some :P.';//6 some's
    alert('Test1: "in" located ' + count(test1, 'in') + ' times.');
    alert('Test2: "some" located  ' + count(test2,'SoME') + ' times.');

}
function count(text, subStr) {
    var count = 0,
        index = 0;
    text = text.toLowerCase();
    subStr = subStr.toLowerCase();

    while (true) {
        index = text.indexOf(subStr, index);
        if (index == -1) {
            break;
        }
        index += 1;
        count += 1;
    }
    return count;
}