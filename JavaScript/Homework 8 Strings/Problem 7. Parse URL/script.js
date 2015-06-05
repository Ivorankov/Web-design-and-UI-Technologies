/*Problem 7. Parse URL

 Write a script that parses an URL address given in the format:
 [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
 Return the elements in a JSON object.*/

function test() {
    var link = 'http://telerikacademy.com/Courses/Courses/Details/239',
        link2 = 'https://some.bg/SOmething/SOmething/Dangerzoneee';
    console.log(parseURL(link));//given the URL is valid it should work for any
    console.log(parseURL(link2));
}
function parseURL(link) {
    var index = 0,
        tempIndex = 0,
        tempString = '',
        length = link.length,
    result = {
        "protocol": '',
        "server": '',
        "resource": ''
    };
    //protocol
    index = link.indexOf(':');
    for (var i = 0; i < index; i += 1) {
        tempString += link[i];
    }
    result.protocol = tempString;
    tempIndex = index + 3;
    tempString = '';
    //server
    index = link.indexOf('/', tempIndex);
    for (i = tempIndex; i < index; i += 1) {
        tempString += link[i];
    }
    result.server = tempString;
    tempString = '';
    //resource
    for (i = index + 1; i < length; i += 1) {
        tempString += link[i];
    }
    result.resource = tempString;
    return result;
}