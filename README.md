# NoteTaker - Express

## Introduction

I have created an application that can be used to write, save, and delete notes.This application is great for users that have a hard time remembering notes, it helps them take notes, store and delete them at their leisure. This application uses an express backend and save and retrieve note data from a JSON file.

## Technology Used
* JSON
* HTML
* Heroku
* APIs
* JS
* Express

## Application

![alt text](https://github.com/orenamema/NoteTaker/raw/master/public/assets/images/note.gif)

## Requirements

It includes the following HTML routes:

* GET /notes - Returns the notes.html file.
* GET * - Returns the index.html file

The application has a JSON file using the fs module.

I have also used the following API routes:

* GET /api/notes 
* POST /api/notes
* DELETE /api/notes/:id 

## Code
```
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
```
The code above highlights the 3 different functions used to save, read and delete the notes.

## Author

**Oren Amema**

* [Github](https://github.com/orenamema)
* [LinkedIn](https://www.linkedin.com/in/oren-amematekpo-b7a12b13)
