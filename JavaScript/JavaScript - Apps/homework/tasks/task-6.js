/* 
 Create a function that:
 *   **Takes** a collection of books
 *   Each book has propeties `title` and `author`
 **  `author` is an object that has properties `firstName` and `lastName`
 *   **finds** the most popular author (the author with biggest number of books)
 *   **prints** the author to the console
 *	if there is more than one author print them all sorted in ascending order by fullname
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   **Use underscore.js for all operations**
 */

function solve() {
    var _ = require('underscore');

    return function (books) {
        var sortedAuthorsByRating = _.chain(books).countBy(function (book) {
            return book.author.firstName + ' ' + book.author.lastName
        })
            .pairs()
            .sortBy('1')
            .reverse()
            .value();

        var topRatedAuthors = _.chain(sortedAuthorsByRating)
            .groupBy('1')
            .toArray()
            .last()
            .value();

        var sortedTopAuthorsByName = _.sortBy(topRatedAuthors, function (author) {
            return author[0];
        });

        _.each(sortedTopAuthorsByName, function (author) {
            console.log(author[0])
        });
    };
}

module.exports = solve;
