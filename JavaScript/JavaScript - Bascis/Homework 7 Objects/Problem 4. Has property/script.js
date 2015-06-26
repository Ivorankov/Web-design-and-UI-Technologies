/*Problem 4. Has property

 Write a function that checks if a given object contains a given property.*/
function test() {
    var obj1 = {
        name: 'ALex',
        country: 'USA',
        number: '087878787'
    };
    var obj2 = {
        name: 'NP',
        location: '90.0000° N, 0.0000° W',
        description: 'Cold, White, Boring',
        temp: -5
    };
    var searchProp = document.getElementById('prop').value;
    if (hasProp(obj1, searchProp) == -1) {
        alert('The first object does not contain property: ' + searchProp);
    } else {
        alert('The first object contains the property: ' + searchProp);
    }

    if (hasProp(obj2, searchProp) == -1) {
        alert('The second object does not contain property: ' + searchProp);
    } else {
        alert('The second object contains the property: ' + searchProp);
    }

}
function hasProp(object, searchProp) {
    var props = Object.getOwnPropertyNames(object);
    for (var index in props) {
        if (props[index] == searchProp) {
            return 1;
        }
    }
    return -1;
}