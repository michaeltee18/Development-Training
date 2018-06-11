// // NOTE: this take an object and converts to a string
// // var obj = {
// //   name:'Michael'
// // };
// // var stringObj=JSON.stringify(obj);
// // console.log(typeof stringObj);
// // console.log(stringObj);
//
// // take string and convert back to an object
// var personString = '{"name":"Michael", "age":33}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title:'some title',
  body: 'some body'
};

//this converts the object to a JSON string
var originalNoteString = JSON.stringify(originalNote);
// console.log(typeof originalNoteString);
// console.log(originalNoteString);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
 //convert string back to object called note
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
