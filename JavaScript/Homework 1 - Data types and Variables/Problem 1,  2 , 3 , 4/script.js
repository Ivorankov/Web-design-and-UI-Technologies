//Problem 1. JavaScript literals
//
//Assign all the possible JavaScript literals to different variables.
//
// Problem 2. Quoted text
//
//Create a string variable with quoted text in it.
//    For example: `'How you doin'?', Joey said'.
//
//Problem 3. Typeof variables
//
//Try typeof on all variables you created.
//
//Problem 4. Typeof null
//
//Create null, undefined variables and try typeof on them.

var dataObject = {//Problem 1
    string: 'Im a string',
    number: 123,
    float: 1.23,
    bool: true,
    array: ['Im', 'a', 'string', 'array'],
    quotes: '"The cat says - Moo. ""Wait, WHAT?"',//Problem 2
    null: null,//Problem 4
    uni:undefined

};
for (var dataType in dataObject) {//Problem 1,2,3,4
    alert(dataType + ': ' + dataObject[dataType] + ' | My type is: ' + typeof dataObject[dataType]);
}



