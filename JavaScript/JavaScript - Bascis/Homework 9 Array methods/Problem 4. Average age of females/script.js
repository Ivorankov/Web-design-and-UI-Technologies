/*Problem 4. Average age of females

Write a function that calculates the average age of all females, extracted from an array of persons
Use Array#filter
Use only array methods and no regular loops (for, while)*/

function test() {
    var people1 = [
            createPerson('Jenny','Johns',12,true),
            createPerson('Tim','Johns',54,false),
            createPerson('Todd','Johns',69,false),
            createPerson('Tracy','Johns',16,true)
        ],
        people2 = [
            createPerson('John','Johns',18,false),
            createPerson('Jill','Johns',29,true),
            createPerson('Jim','Johns',17,false),
            createPerson('Trish','Johns',69,true)
        ],
        result1 = 0,
        result2 = 0,
        count1 = 0,
        count2 = 0;
        people1.filter(function(element) {
            if(element.isFemale){
                result1 +=element.age;
                count1 +=1;
            }
        });
        people2.filter(function(element) {
            if(element.isFemale){
                result2 +=element.age;
                count2 +=1;
            }
        });
    alert('Test 1: ' + result1/count1);
    alert('Test 2: ' + result2/count2);
}
function createPerson(firstName,lastName,age,isFemale) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        isFemale: isFemale
    }
}