# NoteTaker - Express

## Introduction

I have created an application that can be used to write, save, and delete notes.This application is great for users that have a hard time remembering notes, it helps them take notes, store and delete them at their leisure. This application uses an express backend and save and retrieve note data from a JSON file.

## Technology Used
* [JSON](https://www.npmjs.com/package/json)
* [Heroku](https://dashboard.heroku.com)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)

## Application

![alt text](https://github.com/orenamema/NoteTaker/raw/master/public/assets/images/note.gif)

In order to take notes with this application, the user needs to follow the steps:

* Navigate to Notetaker in the terminal
* Then the app with the command `node app.js`
* Then open your browser and enter the link for `PORT:3000`
* Click on get started and start entering your notes

Here is the application [link](https://frozen-headland-89865.herokuapp.com/) deployed on Heroku

## Requirements

It includes the following HTML routes:

* GET `/notes` - Must return the notes.html file.
* GET `*` - Must return the index.html file

The application has a JSON file using the fs module.

I have also used the following API routes:

* GET `/api/notes` 
* POST `/api/notes`
* DELETE `/api/notes/:id` 

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
* [Portfolio](https://orenamema.github.io/UpdatedPortfolio/)
