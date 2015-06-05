/*Problem 2. People of age

 Write a function that checks if an array of person contains only people of age (with age 18 or greater)
 Use only array methods and no regular loops (for, while)*/

function test() {
    var people1 = [
        createPerson('Tom','Johns',18,false),
        createPerson('Tim','Johns',54,false),
        createPerson('Todd','Johns',69,false),
        createPerson('Tracy','Johns',16,true)
        ],
    people2 = [
        createPerson('John','Johns',18,false),
        createPerson('Jill','Johns',29,true),
        createPerson('Jim','Johns',69,false),
        createPerson('Jason','Johns',23,false)
    ],
    bool1,bool2;

    people1.forEach(function (element, index, array) {
        if (element.age < 18) {
            bool1 = true;
        }
    });
    people2.forEach(function (element) {
        if (element.age < 18) {
            bool2 = true;
        }
    });
    isTrue(bool1,'Test 1');
    isTrue(bool2,'Test 2');
}
function isTrue(bool,text){
    if (bool) {
        alert(text + ' There are under aged people!');
    } else {
        alert(text + ' All is good');
    }
}
function createPerson(firstName,lastName,age,isFemale) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        isFemale: isFemale
    }
}

