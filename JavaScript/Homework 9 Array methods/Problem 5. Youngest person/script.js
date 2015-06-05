/*Problem 5. Youngest person

 Write a function that finds the youngest male person in a given array of people and prints his full name
 Use only array methods and no regular loops (for, while)
 Use Array#find*/

function test() {
    var people1 = [
            createPerson('Jenny', 'Johns', 12, true),
            createPerson('Tim', 'Johns', 10, false),
            createPerson('Todd', 'Johns', 69, false),
            createPerson('Tracy', 'Johns', 16, true)
        ],
        result1 = {};

    if (!Array.prototype.find) {
        Array.prototype.find = function(callback) {
            var i, len = this.length;
            for (i = 0; i < len; i += 1) {
                if (callback(this[i], i, this)) {
                    return this[i];
                }
            }
        };
    }
    result1 =
        people1.sort(function(a, b) {
            return a.age - b.age;
        }).find(function(item) {
            return !item.isFemale;
        });
    console.log(result1);
}

function createPerson(firstName, lastName, age, isFemale) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        isFemale: isFemale
    }
}