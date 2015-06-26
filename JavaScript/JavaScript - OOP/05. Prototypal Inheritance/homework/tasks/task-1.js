/* Task Description */
/*
 * Create an object domElement, that has the following properties and methods:
 * use prototypal inheritance, without function constructors
 * method init() that gets the domElement type
 * i.e. `Object.create(domElement).init('div')`
 * property type that is the type of the domElement
 * a valid type is any non-empty string that contains only Latin letters and digits
 * property innerHTML of type string
 * gets the domElement, parsed as valid HTML
 * <type attr1="value1" attr2="value2" ...> .. content / children's.innerHTML .. </type>
 * property content of type string
 * sets the content of the element
 * works only if there are no children
 * property attributes
 * each attribute has name and value
 * a valid attribute has a non-empty string for a name that contains only Latin letters and digits or dashes (-)
 * property children
 * each child is a domElement or a string
 * property parent
 * parent is a domElement
 * method appendChild(domElement / string)
 * appends to the end of children list
 * method addAttribute(name, value)
 * throw Error if type is not valid
 * // method removeAttribute(attribute)
 */


/* Example

 var meta = Object.create(domElement)
 .init('meta')
 .addAttribute('charset', 'utf-8');

 var head = Object.create(domElement)
 .init('head')
 .appendChild(meta)

 var div = Object.create(domElement)
 .init('div')
 .addAttribute('style', 'font-size: 42px');

 div.content = 'Hello, world!';

 var body = Object.create(domElement)
 .init('body')
 .appendChild(div)
 .addAttribute('id', 'cuki')
 .addAttribute('bgcolor', '#012345');

 var root = Object.create(domElement)
 .init('html')
 .appendChild(head)
 .appendChild(body);

 console.log(root.innerHTML);
 Outputs:
 <html><head><meta charset="utf-8"></meta></head><body bgcolor="#012345" id="cuki"><div style="font-size: 42px">Hello, world!</div></body></html>
 */


function solve() {
    var domElement = (function () {
        function validateType(string) {
            var isValidType = true;
            var name = string.toUpperCase();
            for (var i = 0; i < name.length; i += 1) {
                if (name.charCodeAt(i) < 48 || name.charCodeAt(i) > 57) {
                    isValidType = false;
                } else {
                    continue;
                }
                if (name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) {
                    isValidType = true;
                }
                if (!isValidType) {
                    throw new Error('Invalid Type name');
                }
            }
        }

        //This function is like the above only its optimised(and the annoying check for '-' is added) :P
        function validateAttributeName(string) {
            var isValidName = true;
            var name = string.toUpperCase();
            for (var i = 0; i < name.length; i += 1) {
                if (name.charCodeAt(i) < 48 || name.charCodeAt(i) > 57) {

                } else {
                    continue;//if not its continued
                }
                if (name.charCodeAt(i) < 65 || name.charCodeAt(i) > 90) {

                } else {
                    continue;
                }
                if (name.charCodeAt(i) === 45 || name === ' ') {

                } else {
                    throw new Error('Invalid attribute name');
                }
            }
        }

        function validateString(string) {
            if (typeof string !== 'string') {
                throw new Error('Invalid data type');
            }
            if (string.length === 0) {
                throw new Error('Invalid name length');
            }
        }

        function isEmpty(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop))
                    return false;
            }
            return true;
        }

        //Parses a single dom element eg. - <div>
        function parseHTML(domElement) {
            var result = '',
                arr = [];
            result += '<' + domElement.type;
            if (typeof domElement === 'string') {
                return result + '>';
            }
            for (var attr in domElement.attributes) {
                if (domElement.attributes.hasOwnProperty(attr)) {
                    arr.push([attr, domElement.attributes[attr]]);
                }
            }
            arr.sort();
            if (!isEmpty(domElement.attributes)) {
                for (var i = 0; i < arr.length; i += 1) {
                    result += ' ' + arr[i][0] + '="' + arr[i][1] + '"';
                }
            }
            result += '>';
            return result;
        }

        //Parses the full content => parent - children
        function parseFullHTML(domObject, inRecursion) {
            var result = '',
                hasParent = false;
            if (!isEmpty(domObject.parent)) {
                hasParent = true;
            }
            function generateClosingTag(domElement) {
                var result = '';
                result += '</' + domElement.type + '>';
                return result;
            }

            result += parseHTML(domObject);

            if (!isEmpty(domObject.children)) {
                for (var i = 0; i < domObject.children.length; i += 1) {// Parses the children (if there are any)
                    if (typeof domObject.children[i] === 'string') {
                        if (hasParent && !inRecursion) {
                            result += parseHTML(domObject.parent);
                        }
                        result += domObject.children[i];
                    } else {
                        result += parseHTML(domObject.children[i]);
                        //If the child object has children
                        if (domObject.children[i].children.length !== 0) {
                            for (var k = 0; k < domObject.children[i].children.length; k += 1) {
                                //When the object is a string no parsing is required
                                if (typeof domObject.children[i].children[k] === 'string') {
                                    result += domObject.children[i].children[k];

                                } else {
                                    //Runs the child object thru the function
                                    result += parseFullHTML(domObject.children[i].children[k], true);//Little recursion :D
                                }
                            }
                            // Adds the closing tag of the parent after all the children objects have been parsed
                            result += generateClosingTag(domObject.children[i]);
                        } else {
                            if (typeof domObject.children[i].content !== 'undefined') {
                                result += domObject.children[i].content;
                            }
                            result += generateClosingTag(domObject.children[i]);
                        }
                    }
                }
                result += generateClosingTag(domObject);
            } else { // If there are no children ...
                if (domObject.content !== 'undefined') {
                    result += domObject.content;
                }
                result += generateClosingTag(domObject);
            }
            //Adds closing parent tag (unless the function is used in recursion, otherwise parent tags are added after every child)
            if (hasParent && !inRecursion) {
                result += generateClosingTag(domObject.parent);
            }
            return result;
        }

        // Creating the object, setting methods and props to its prototype
        var domElement = Object.create(Object);
        domElement.prototype.init = function (type) {
            this.type = type;
            this.content = '';
            this.attributes = {};
            this.children = [];
            this.parent = {};
            this.innerHTML = '';
            return this;
        };
        domElement.prototype.appendChild = function (child) {
            if (child.prototype !== domElement.prototype && typeof child !== 'string') {
                throw new Error('Invalid child')
            }
            this.children.push(child);
            if (typeof child !== 'string') {
                child.parent = this;
            }
            return this;
        };
        domElement.prototype.addAttribute = function (name, value) {
            validateString(name);
            validateAttributeName(name);
            this.attributes[name] = value;
            return this;
        };
        domElement.prototype.removeAttribute = function (attribute) {
            for (var name in this.attributes) {
                if(this.attributes.hasOwnProperty(name)){
                    if (name === attribute) {
                        delete this.attributes[name];
                        return this;
                    }
                }
            }
            throw new Error('The attribute does not exist');
        };
        Object.defineProperty(domElement, 'attributes', {
            get: function () {
                return this._attributes;
            },
            set: function (attribute) {
                this._attributes = attribute;
            }
        });
        Object.defineProperty(domElement, 'innerHTML', {
            get: function () {
                this._innerHTML = parseFullHTML(this);
                return this._innerHTML;
            }
        });
        Object.defineProperty(domElement, 'type', {
            get: function () {
                return this._type;
            },
            set: function (type) {
                validateString(type);
                validateType(type);
                this._type = type;
            }
        });
        Object.defineProperty(domElement, 'content', {
            get: function () {
                return this._content;
            },
            set: function (content) {
                this._content = content;
            }
        });
        Object.defineProperty(domElement, 'children', {
            get: function () {
                return this._children;
            },
            set: function (children) {
                this._children = children;
            }
        });
        Object.defineProperty(domElement, 'parent', {
            get: function () {
                return this._parent;
            },
            set: function (parent) {
                this._parent = parent;
            }
        });
        return domElement;
    }());
    return domElement;
}
solve();
module.exports = solve;
