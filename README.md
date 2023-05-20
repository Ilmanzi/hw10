# hw10
Homework 10 - File &amp; Design Pattern

First thing to do is install all the packages/modules
->
npm install ( not necessary, you can skip this if you clone all the node_modules )

To run the app, use the nodemon script
->
npm run it

Open Routes folder for available endpoints
GET AND DELETE METHOD
-> Make sure to change the parameter with number
ID RANGE = 1-104
PAGE RANGE = 1-11

POST AND PUT METHOD
-> Remember to fill those out in the body raw json type!
{ 
  title:
  genres:
  year:
}

PUT METHOD - UPLOAD PHOTO
This method is adding a photo into a listed film in database
Example:
....movies/2
insert body form-data Key with 'photo' and change the type into 'File'
then Select any JPG / PNG FORMAT ( LIMITED FOR JPG AND PNG FORMAT FILE ONLY )
