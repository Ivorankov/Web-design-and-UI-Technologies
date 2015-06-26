/*Problem 4. Parse tags

 You are given a text. Write a function that changes the text in all regions:

 <upcase>text</upcase> to uppercase.
 <lowcase>text</lowcase> to lowercase
 <mixcase>text</mixcase> to mix casing(random)

 Example: We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.

 The expected result:
 We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.

 Note: Regions can be nested.*/
function test() {
    var test1 = "We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>" +
        " We <mixcase>don't</mixcase> have <lowcase>ANYTHing</lowcase> else.";
    alert(transform(test1));

}
function transform(text) {
    var index1 = 0,
        index2 = 0,
        array = text.split(''),
        openTag,//These three are used below to remove the tags
        closeTag,
        regex,
        tags = [['<upcase>', '</upcase>'], ['<lowcase>', '</lowcase>'], ['<mixcase>', '</mixcase>']],
        arrayOfFunc = {// I wanted to see if I can make an array of functions.. it worked :D
            0: function (char) {
                if (validateLetter(char)) {
                    return char.toUpperCase();
                } else {
                    return char;
                }
            },
            1: function (char) {
                if (validateLetter(char)) {
                    return char.toLowerCase();
                } else {
                    return char;
                }

            },
            2: function (char) {
                if (validateLetter(char)) {
                    if (Math.floor(Math.random() * (2 - 1 + 2)) + 1 == 1) {
                        return char.toUpperCase();
                    } else {
                        return char.toLowerCase();
                    }
                } else {
                    return char;
                }
            }
        };
    for (var i = 0; i < tags.length; i += 1) {
        while (true) {
            index1 = text.indexOf(tags[i][0], index1);//finds the index where the opening tag begins.
            index2 = text.indexOf(tags[i][1], index2);//finds the index where the closing tag begins.
            index1 += tags[i][0].length;//length of the opening tag is compensated.
            if (index1 != -1 && index2 != -1) {
                while (index1 != index2) {
                    array[index1] = arrayOfFunc[i.toString()](array[index1]);
                    index1 += 1;
                }
                index2 += 1;
            } else {
                break;
            }
        }
        index1 = 0;//Both are set to 0 because we have more then 1 tag to look for in the text
        index2 = 0;
    }
    array = array.join('');
    for (i in tags) {//After all the text in all the tags is transformed the tags get removed via weired regex stuff
        openTag = tags[i][0];
        closeTag = tags[i][1];
        regex = new RegExp(openTag, 'g');
        array = array.replace(regex, '');
        regex = new RegExp(closeTag, 'g');
        array = array.replace(regex, '');
    }
    return array;
}
function validateLetter(char) {//javascript gets kinda crashie when you use .toUpper/LowerCase on not letters
    if (char.match(/[a-zA-Z]/i)) {
        return 1;
    } else {
        return 0;
    }
}
