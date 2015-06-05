/*Problem 4. Lexicographically smallest

Write a script that finds the lexicographically smallest
and largest property in document, window and navigator objects*/
function test(){
    var lexSmallest = '',
        lexLargest = '',
        prop;

    for (prop in document) {
        if (lexLargest==='') {lexLargest=prop;}
        if (lexSmallest==='') {lexSmallest=prop; continue;}

        if (lexSmallest > prop) {
            lexSmallest = prop;
        }
        if (lexLargest < prop) {
            lexLargest = prop;
        }
    }

    alert('Longest: ' + lexLargest + ', Shortest: ' + lexSmallest);

    lexSmallest = '';
    lexLargest = '';

    for (prop in window) {
        if (lexLargest==='') {lexLargest=prop;}
        if (lexSmallest==='') {lexSmallest=prop; continue;}

        if (lexSmallest > prop) {
            lexSmallest = prop;
        }
        if (lexLargest < prop) {
            lexLargest = prop;
        }
    }

    alert('Longest: ' + lexLargest + ', Shortest: ' + lexSmallest);

    lexSmallest = '';
    lexLargest = '';

    for (prop in navigator) {
        if (lexLargest==='') {lexLargest=prop;}
        if (lexSmallest==='') {lexSmallest=prop; continue;}

        if (lexSmallest > prop) {
            lexSmallest = prop;
        }
        if (lexLargest < prop) {
            lexLargest = prop;
        }
    }
    alert('Longest: ' + lexLargest + ', Shortest: ' + lexSmallest);
}