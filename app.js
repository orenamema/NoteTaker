var express = require("express");
var path = require("path");
const fs = require('fs')


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static('public'))

////////////// ROUTES //////////////

app.get("/notes", function(req, res) {
  // res.sendFile(path.join(__dirname, "notes.html"));
  res.sendfile('public/notes.html');
});


app.get("/api/notes", function(req, res) {
  // res.sendFile(path.join(__dirname, "index.html"));
  console.log("Notes were asked!");
  var notes = readNote();
  res.send(notes);
});

app.post('/api/notes', function (req, res) {
  // res.send('POST request to the homepage')
  console.log(req.body);
  saveNote(req.body);
})

app.get("*", function(req, res) {
  // res.sendFile(path.join(__dirname, "index.html"));
  res.sendfile('public/index.html');
});

////////////// HELPER FUNCTIONS //////////////

function saveNote(the_data){
  var data = JSON.parse(fs.readFileSync('db/db.json','utf8'));
  data.push(the_data);
  fs.writeFile('db/db.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('Note Saved to File!');
  });
}

function readNote(){
  var data = JSON.parse(fs.readFileSync('db/db.json','utf8'));
  // console.log(the_data);
  // console.log(data);
  return data;
}

//Delete Notes Function

// function deleteNote(id){
// var data = JSON.parse(fs.readFileSync('db/db.json','utf8'));
// return $.ajax({
//     url: "api/notes/" + id,
//     method: "DELETE"
//}
//   });
// Identify which notes need to be deleted

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

// app.post('/', function (req, res) {
//   res.send('POST request to the homepage')
// })

// POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

// app.post('/', function (req, res) {
//   res.send('POST request to the homepage')
// })

// DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

// app.all('/secret', function (req, res, next) {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});