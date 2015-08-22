/*
 Create a function that:
 *   Takes an array of students
 *   Each student has a `firstName` and `lastName` properties
 *   **Finds** all students whose `firstName` is before their `lastName` alphabetically
 *   Then **sorts** them in descending order by fullname
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   Then **prints** them to the console
 *   **Use underscore.js for all operations**
 */

function solve() {
    return function (students) {
        var _ = require('underscore');

        var filtered = _.filter(students, function (student) {
            return student.firstName < student.lastName;
        });

        var sorted = _.chain(filtered)
            .sortBy('lastName')
            .sortBy('firstName')
            .reverse()
            .value();

        _.each(sorted, function (person) {
            console.log(person.firstName + ' ' + person.lastName)
        });
    };
}

module.exports = solve;