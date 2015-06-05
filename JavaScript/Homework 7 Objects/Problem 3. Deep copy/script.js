/*Problem 3. Deep copy

 Write a function that makes a deep copy of an object.
 The function should work for both primitive and reference types.*/

function test() {
    var oldObj = {
        number: 1,
        bool: true,
        string: 'Hi',
        object: {name: 'object', age: 5}
        };
    var newObj;
    newObj = clone(oldObj);
    console.log('This is the object');
    console.log(oldObj);
    console.log('This is the new object that will acquire the value');
    console.log(newObj);
    console.log('Now the old object will get its prop values changed');
    oldObj.number = 2;
    oldObj.bool = false;
    oldObj.string = 'Bye';
    oldObj.object = {name: 'not an object', age: 0};
    console.log(oldObj);
    console.log('And now the new objects prop values will be printed (if they havent changed this has worked :D');
    console.log(newObj);
}
function clone(object) {
    var newObject;
    newObject = JSON.parse(JSON.stringify(object));
    return newObject;
}