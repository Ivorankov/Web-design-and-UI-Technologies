/* Task Description */
/* 
 Create a function constructor for Person. Each Person must have:
 *	properties `firstname`, `lastname` and `age`
 *	firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
 *	age must always be a number in the range 0 150
 *	the setter of age can receive a convertible-to-number value
 *	if any of the above is not met, throw Error
 *	property `fullname`
 *	the getter returns a string in the format 'FIRST_NAME LAST_NAME'
 *	the setter receives a string is the format 'FIRST_NAME LAST_NAME'
 *	it must parse it and set `firstname` and `lastname`
 *	method `introduce()` that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
 *	all methods and properties must be attached to the prototype of the Person
 *	all methods and property setters must return this, if they are not supposed to return other value
 *	enables method-chaining
 */
function solve() {
    var Person = (function () {
        function Person(firstname, lastname, age) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
        }

        Object.defineProperty(Person.prototype, 'firstname', {
            get: function () {
                return this._firstname;
            },
            set: function (firstname) {
                validateString(firstname);
                this._firstname = firstname;
            }
        });
        Object.defineProperty(Person.prototype, 'lastname', {
            get: function () {
                return this._lastname;
            },
            set: function (lastname) {
                validateString(lastname);
                this._lastname = lastname;
            }
        });
        Object.defineProperty(Person.prototype, 'age', {
            get: function () {
                return this._age;
            },
            set: function (age) {
                if (typeof +age != 'number') {
                    throw new Error('Invalid age');
                }
                if (+age < 0 || +age > 150) {
                    throw new Error('Invalid age!');
                }
                this._age = age;
            }
        });
        Object.defineProperty(Person.prototype,'fullname',{
            get: function(){
                return this.firstname + ' ' + this.lastname;
            },
            set: function(fullname){
                this._fullname = fullname;
                this.firstname = fullname.split(' ')[0];
                this.lastname = fullname.split(' ')[1];
            }
        });
        Person.prototype.introduce = function(){
          return 'Hello! My name is ' + this.firstname + ' ' + this.lastname + ' and I am ' + this.age + '-years-old';
        };
        return Person;
    }());
    return Person;
    function validateString(string) {
        if (typeof string != 'string') {
            throw new Error('Invalid data type');
        }
        if (string.length < 3 || string.length > 20) {
            throw new Error('Invalid name length');
        }
        var name = string.toUpperCase();
        for (var i = 0; i < name.length; i += 1) {
            if (name.charCodeAt(i) < 65 || name.charCodeAt(i) > 90) {
                throw new Error('Invalid letters in ')
            }
        }
    }
}
solve();
module.exports = solve;