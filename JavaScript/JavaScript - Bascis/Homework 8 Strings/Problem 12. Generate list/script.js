/*Problem 12. Generate list

 Write a function that creates a HTML <ul> using a template for every HTML <li>.
 The source of the list should be an array of elements.
 Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.*/

function test(){
    var people = [
        {"name": 'Tim', "age":20},
        {"name": 'Tim1', "age":21},
        {"name": 'Tim2', "age":22},
        {"name": 'Tim3', "age":23}
    ];
    generateList(people);
}
function generateList(items) {
    var ul = document.createElement('ul');

    for (var i in items) {
        var li = document.createElement('li');
        li.innerHTML = items[i].name + ' ' + items[i].age;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};