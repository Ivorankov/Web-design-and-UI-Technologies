/* 
 Create a function that:
 *   **Takes** an array of animals
 *   Each animal has propeties `name`, `species` and `legsCount`
 *   **groups** the animals by `species`
 *   the groups are sorted by `species` descending
 *   **sorts** them ascending by `legsCount`
 *	if two animals have the same number of legs sort them by name
 *   **prints** them to the console in the format:

 ```
 ----------- (number of dashes is equal to the length of the GROUP_1_NAME + 1)
 GROUP_1_NAME:
 ----------- (number of dashes is equal to the length of the GROUP_1_NAME + 1)
 NAME has LEGS_COUNT legs //for the first animal in group 1
 NAME has LEGS_COUNT legs //for the second animal in group 1
 ----------- (number of dashes is equal to the length of the GROUP_2_NAME + 1)
 GROUP_2_NAME:
 ----------- (number of dashes is equal to the length of the GROUP_2_NAME + 1)
 NAME has LEGS_COUNT legs //for the first animal in the group 2
 NAME has LEGS_COUNT legs //for the second animal in the group 2
 NAME has LEGS_COUNT legs //for the third animal in the group 2
 NAME has LEGS_COUNT legs //for the fourth animal in the group 2
 ```
 *   **Use underscore.js for all operations**
 */

function solve() {
    var _ = require('underscore');
    function printObjectToConsole(animals){
        _.each(animals, function(val, key){
            var separator = new Array(key.length + 2).join('-');
            console.log(separator);
            console.log(key + ':');
            console.log(separator);
            _.each(val, function(item){
                console.log(item.name + ' has ' + item.legsCount + ' legs');
            });
        });
    }
    return function (animals) {

        var groupedAnimals = _.chain(animals)
            .sortBy('name')
            .sortBy('legsCount')
            .reverse()
            .sortBy('species')
            .reverse()
            .groupBy('species')
            .value();

        printObjectToConsole(groupedAnimals);
    };
}

module.exports = solve;
