/*Problem 1. Make person

 Write a functio for creating persons.
 Each person must have firstname, lastname, age and gender (true is female, false is male)
 Generate an array with ten person with different names, ages and genders*/

function test() {
 var array = generatePeople();
    console.log(array);

}
function createPerson() {
    return   {
        firstName: ' ',
        lastName: ' ',
        age: '',
        isFemale: ''
    }
}
function generatePeople() {
    var arrayOfPeople = [],
        firstName = 'Tim',
        lastName = 'Robinson',
        age = -1,
        isFemale = false,
        person = {};
    for (var i = 0; i < 10; i += 1) {
        person = createPerson();
        person.firstName = firstName + i.toString();
        person.lastName = lastName + i.toString();
        person.age = Math.floor((Math.random()*60)+14);
        if(i%2 == 0){
            person.isFemale = true;
        } else {
            person.isFemale = false;
        }
        arrayOfPeople.push(person);
    }
    return arrayOfPeople;
}