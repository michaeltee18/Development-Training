console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  //If the note was added, let the user know it was saved.
  if (note){
    console.log('Note created');
    notes.logNote(note);
  }else{
    console.log('Not title not saved.')
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  // console.log('Read note.');
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Note found');
    notes.logNote(note);
  }else{
    console.log('Note not found.');
  }

} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was remvoed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
