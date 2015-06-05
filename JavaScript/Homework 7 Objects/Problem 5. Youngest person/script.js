/*Problem 5. Youngest person

 Write a function that finds the youngest person in a given array of people and prints his/hers full name

 Each person has properties firstname, lastname and age.*/
function test() {
    var people = [],
        youngestPeson,
        firstPerson = {
            firstname: 'Alex',
            lastname: 'Johns',
            age: 41
        },
        secondPerson = {
            firstname: 'Jane',
            lastname: 'Hong',
            age: 21
        },
        thirdPerson = {
            firstname: 'Trish',
            lastname: 'ONeel',
            age: 35
        },
        forthPerson = {
            firstname: 'Tim',
            lastname: 'Robson',
            age: 19
        };
    people.push(firstPerson);
    people.push(secondPerson);
    people.push(thirdPerson);
    people.push(forthPerson);
    youngestPeson = findYoungest(people);
    alert(youngestPeson.firstname + ' ' + youngestPeson.lastname + ' is the youngest person, age: ' + youngestPeson.age);

}
function findYoungest(people) {
    var selectedPerson;
    for (var i = 1; i < people.length; i += 1) {
        if (people[i].age < people[i - 1].age) {
            selectedPerson = people[i];
        }
    }
    return selectedPerson;
}