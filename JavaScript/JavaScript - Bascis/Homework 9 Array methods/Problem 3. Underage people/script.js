/*Problem 3. Underage people

Write a function that prints all underaged persons of an array of person
Use Array#filter and Array#forEach
Use only array methods and no regular loops (for, while)*/

function test() {
    var people1 = [
            createPerson('Tom','Johns',12,false),
            createPerson('Tim','Johns',54,false),
            createPerson('Todd','Johns',69,false),
            createPerson('Tracy','Johns',16,true)
        ],
        people2 = [
            createPerson('John','Johns',18,false),
            createPerson('Jill','Johns',29,true),
            createPerson('Jim','Johns',17,false),
            createPerson('Jason','Johns',23,false)
        ],
        result1,result2;
    result1 =
    people1.filter(function(item) {//I don't find the need for two methods souu... just the filter one
        return item.age < 18;
    });
    result2 =
        people2.filter(function(item) {
            return item.age < 18;
        });
    console.log(result1);
    console.log(result2);
}
function createPerson(firstName,lastName,age,isFemale) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        isFemale: isFemale
    }
}