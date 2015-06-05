/*Problem 6.

 Write a function that groups an array of people by age, first or last name.
 The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
 Use function overloading (i.e. just one function)*/

//The key is the group? What group? The values are arrays with people ? Arrays? so array of arrays?...who wrote this shit...
function test() {
    var people = [],//yep copy/paste
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
            firstname: 'Alex',
            lastname: 'Hong',
            age: 35
        },
        forthPerson = {
            firstname: 'Tim',
            lastname: 'Robson',
            age: 21
        };
    people.push(firstPerson);
    people.push(secondPerson);
    people.push(thirdPerson);
    people.push(forthPerson);
    var test1 = group(people, 'firstname');
    var test2 = group(people, 'lastname');
    var test3 = group(people, 'age');
    console.log(test1);
    console.log(test2);
    console.log(test3);
}
function group(people, criteria) {
    var result = {},//This will be the associative array
        key,
        length = people.length;
    switch (criteria) {//I assumed that the group is the criteria - ex. if people have the same age they go in the same key...
        case 'firstname':
            for (var i = 0; i < length; i += 1) {
                key = people[i].firstname;//The is the key(index) of the result array
                result[key] = [];//Because we want to have the ability to store multiple values in 1 key its set as empty array.
                for (var j = 0; j < length; j += 1) {
                    if(people[j].firstname == key){
                       result[key].push(people[j]);//Puts all the object that have the same first name in the array
                    }
                }
            }
            break;
        case 'lastname':
            for (i = 0; i < length; i += 1) {
                key = people[i].lastname;
                result[key] = [];
                for (j = 0; j < length; j += 1) {
                    if(people[j].lastname == key){
                        result[key].push(people[j]);
                    }
                }
            }
            break;
        case 'age':
            for (i = 0; i < length; i += 1) {
                key = people[i].age;
                result[key] = [];
                for (j = 0; j < length; j += 1) {
                    if(people[j].age == key){
                        result[key].push(people[j]);
                    }
                }
            }
            break;
        default :
            return 'Some error occurred :P';
            break;
    }
    return result;
}