/*Problem 2. Correct brackets

 Write a JavaScript function to check if in a given expression the brackets are put correctly.

 Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).*/
function test() {
    var openBracket = '(',
        closeBracket = ')',
    //Correct
        expression1 = '(a+b)',
        expression2 = '((a+b)/(c-d))',
    //Incorrect
        expression3 = ')a+b(',
        expression4 = '((a+b)/(c-d)))',
    //These vars are just for the result visualisation
        t1 = 'Test 1: ' + expression1 + '\n',
        t2 = 'Test 2: ' + expression2 + '\n',
        t3 = 'Test 3: ' + expression3 + '\n',
        t4 = 'Test 4: ' + expression4 + '\n';
    if (checkBrackets(expression1) == 1) {
        alert(t1 + 'Yes');
    } else {
        alert(t1 + 'No');
    }
    if (checkBrackets(expression2) == 1) {
        alert(t2 + 'Yes');
    } else {
        alert(t2 + 'No');
    }
    if (checkBrackets(expression3) == 1) {
        alert(t3 + 'Yes');
    } else {
        alert(t3 + 'No');
    }
    if (checkBrackets(expression4) == 1) {
        alert(t4 + 'Yes');
    } else {
        alert(t4 + 'No');
    }
}
function checkBrackets(expression) {
    var openBrackets = 0,
        length = expression.length;
    for (var i = 0; i < length; i += 1) {
        if (expression[i] == '(') {
            openBrackets += 1;
        } else if (expression[i] == ')') {
            openBrackets -= 1;//no need for a second var for the closing brackets
        }
        if (openBrackets < 0) {//The moment the closing brackets become more then the opening the program stops
            return -1;
        }
    }
    if (openBrackets != 0) {//If the above if has passed the only thing left is to check is if there's an equal amount of brackets
        return -1;
    } else {
        return 1;
    }
}