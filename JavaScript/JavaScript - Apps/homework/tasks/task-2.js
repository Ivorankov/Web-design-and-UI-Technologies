/*
 Create a function that:
 *   Takes an array of students
 *   Each student has a `firstName`, `lastName` and `age` properties
 *   **finds** the students whose age is between 18 and 24
 *   **prints**  the fullname of found students, sorted lexicographically ascending
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   **Use underscore.js for all operations**
 */

function solve() {
    var _ = require('underscore');
    return function (students) {
        var filtered = _.filter(students, function (student) {
            return 18 <= student.age && student.age <= 24
        });

        var sortedStudents = _.chain(filtered)
            .sortBy('lastName')
            .sortBy('firstName')
            .value();

        _.each(sortedStudents, function (person) {
            console.log(person.firstName + ' ' + person.lastName)
        });
    };
}

module.exports = solve;
