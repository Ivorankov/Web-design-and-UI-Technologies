/* 
 Create a function that:
 *   Takes an array of students
 *   Each student has:
 *   `firstName`, `lastName` and `age` properties
 *   Array of marks
 *   Each mark has properties `subject` and `value`
 *   **finds** the student with highest average mark (there will be only one)
 *   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   **Use underscore.js for all operations**
 */

function solve() {
    var _ = require('underscore');

    function calcAverageScore(student) {
        return _.reduce(student.marks, function (a, b) {
                return a + b
            }, 0) / (student.marks.length === 0 ? 1 : student.marks.length);
    }

    return function (students) {
        var sortedStudents = _.sortBy(students, function (student) {
            return calcAverageScore(student);
        });

        var topStudent = _.last(sortedStudents);

        console.log(
            topStudent.firstName
            + ' '
            + topStudent.lastName
            + ' has an average score of '
            + calcAverageScore(topStudent));
    };
}

module.exports = solve;
