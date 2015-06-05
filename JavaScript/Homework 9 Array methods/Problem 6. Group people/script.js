/*Problem 6. Group people

Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
Use Array#reduce
Use only array methods and no regular loops (for, while)*/


function test() {
    var people = [
            createPerson('Jenny', 'Johns', 12, true),
            createPerson('Tim', 'Johns', 10, false),
            createPerson('Godd', 'Johns', 69, false),
            createPerson('Zracy', 'Johns', 16, true),
            createPerson('Zena', 'Johns', 54, true)
        ],
        result = {};

    result = people.reduce(function(obj, item) {
        if (obj[item.firstName[0]]) {
            obj[item.firstName[0]].push(item);
        } else {
            obj[item.firstName[0]] = [item];
        }
        return obj;
    }, {});
    console.log(result);
}
function createPerson(firstName, lastName, age, isFemale) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        isFemale: isFemale
    }
}