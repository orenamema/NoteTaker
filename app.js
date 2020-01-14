var express = require("express");
var path = require("path");
const fs = require('fs')

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

////////////// ROUTES //////////////

app.get("/notes", function(req, res) {
  res.sendfile('public/notes.html');
});

app.get("/api/notes", function(req, res) {
  var notes = readNote();
  res.send(notes);
});

app.post('/api/notes', function (req, res) {
  saveNote(req.body);
})

app.delete('/api/notes/:id', function (req, res) {
  deleteNote(req.params.id);
})

app.get("*", function(req, res) {
  res.sendfile('public/index.html');
});

////////////// HELPER FUNCTIONS //////////////

function saveNote(the_data){
  var data = JSON.parse(fs.readFileSync('db/db.json','utf8'));
  the_data['id'] = data.length;
  data.push(the_data);
  fs.writeFile('db/db.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('Note Saved to File!');
  });
}

function readNote(){
  var data = JSON.parse(fs.readFileSync('db/db.json','utf8'));
  return data;
}

function deleteNote(the_index){
  var data = JSON.parse(fs.readFileSync('db/db.json','utf8'));
  if (the_index >= 1){ 
    data.splice(the_index,1);
    fs.writeFile('db/db.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('File Deleted!');
    });
  }
}

////////////// START SERVER //////////////

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});