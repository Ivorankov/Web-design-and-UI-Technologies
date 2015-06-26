/*Problem 9. Extract e-mails

Write a function for extracting all email addresses from given text.
    All sub-strings that match the format @… should be recognized as emails.
    Return the emails as array of strings.*/

function test(){
    var test = 'me@mail.bg and then some more@trish.com ahah@ahha.com Im bored...';
    alert(getEmails(test));
}
function getEmails(text){
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g);
}