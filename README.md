# **BORED APP**

### Project Idea

This app is a random generator of activities. For those times when a person is bored and don't know what they would like to do. There is an option to add activities as well as edit, and delete. There is a database of activities, the schema follows that of the API for continuity. The user will be able to search for activities by type, which are listed as placeholders in the input box. 

Search By: Type
- education
- recreation
- social
- diy
- charity
- cooking
- relaxation
- music
- busywork

In the database I created I have included a couple local SoCal activities. 

### List of Routes
- Index
- Delete
- Update
- Create
- Edit
- Show
- Search
- RandomActivityGenerator


### List of models w/schemas 

Activities {

    activity: , 
    type: ,
    participants: ,
    price: , 
    link:   
}

### List of Technologies Used

- Express.js
- Node.js
- Mongoose
- MongoDB
- Method-override
- Morgan
- VS code
- Nodemon
- EJS
- Postman
- DOTENV


### ScreenShots

![](https://i.imgur.com/m56KUgZ.png)
First we have the home page for random activity as well as search 

![](https://i.imgur.com/0RLZeAP.png)
Next we have the activity's show page where we can see details of the random activity

![](https://i.imgur.com/5xfeEFQ.png)
Here we can add a new activity

![](https://i.imgur.com/5xfeEFQ.png)
Once an activity is added we are able to edit and delete

![](https://i.imgur.com/812mIVX.png)
Last we see the search section where user is able to search for an activity by type. A future enhancement I'm planning will add more ways to search for an activity.
   

### Getting Started 

The app is fairly simple, not much instruction is needed that isn't already in the app. If you are looking to do a search, at this time the only search available is the Type of Activity. The types of activities currently in the database are listed there as placeholders. Once I add an API, the number and variety of activities will *greatly* increase. 



If interested please visit my site: 
    -Github: https://github.com/Jeal3R5/BoredApp
    -Heroku: https://git.heroku.com/bored-app-jr.git

### Future Enhancements

- Connecting API to beef up the activities database
- Add additional search parameters 
    -Participants
    -Price
- Perhaps add a legend of search parameters
- I would really like to tailor activity urls to the users location. I started with a couple in Southern California, and hope to build this up.
- Definitely want to add more/better CSS styles





