require("dotenv").config(); //lets us use the variables in .env
const express = require("express"); //web framework
const mongoose = require("mongoose");
const morgan = require("morgan"); //used for logging
const methodOverride = require("method-override"); //to override request methods
const activities = require("./models/activitySeed");
const Activity = require("./models/Activity");
const PORT = process.env.PORT || 3000;


//Set up Database Connection
const DATABASE_URL = process.env.DATABASE_URL;

//Establish Connection
mongoose.connect(
  DATABASE_URL,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

// Save the connection
const db = mongoose.connection;
db.on("open", () => console.log("mongoose connected"))
  .on("close", () => console.log("mongoose disconnected"))
  .on("error", (err) => console.log(err));

//Create express app
const app = express();

//Middleware
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("public"));


//Routes

//Index Route
app.get("/activities", async (req, res) => {
  //go get activities
  await Activity.find({}).catch((err) => res.send(err));
  //render index.js
  res.render("index.ejs", { activities });
  //console.log(activities)
});

//Seed Route
app.get("/activities/seed", async (req, res) => {
  //delete all existing activities
  await Activity.remove({}).catch((err) => res.send(err));
  //add your sample activities
  //console.log(activities)
  await Activity.create(activities).catch((err) => res.send(err));
  //send the activities as json
  res.json(activities)
});

//RandomActivityGenerator Route
app.get("/randAct", (req, res) => {
  Activity.find(req.params.id, (err, activities) => {
  let randomIndexGen = Math.floor(Math.random() * activities.length);
  let randomAct = activities[randomIndexGen]
    res.render("show.ejs", {activity: randomAct}) 
  })
})


//Search Route
app.get("/search", (req, res) => {
  //search for activity type
  //console.log(req.query.type)
  Activity.find({ type: req.query.type }, (err, activities) => {
    //console.log(activities)
    let randomIndex = Math.floor(Math.random() * activities.length);
    let newActivity = activities[randomIndex]
    res.render("show.ejs", {activity: newActivity})
  })
})

//New Route
app.get('/activities/new', (req, res) => {
    res.render('new.ejs')
});

//Delete Route
app.delete("/activities/:id", (req, res) => {
   Activity.findByIdAndDelete(req.params.id, (err, deletedActivity) => {
    res.redirect("/activities")
  })
})
//Update Route
app.put('/activities/:id',  (req, res) => {
    Activity.findByIdAndUpdate(req.params.id, req.body, (err, updatedActivity) => {
        if (err) console.log(err);
        res.redirect(`/activities/${req.params.id}`);
    })
});

//Create Route
app.post('/activities', (req, res) => {
    //create the activity
   // console.log(req.body)
    Activity.create(req.body).catch((err) => res.send(err))
    //redirect back to main page
    res.redirect('/activities')
})


//Edit Route
app.get("/activities/:id/edit",  ( req, res) => {
     Activity.findById(req.params.id, (err, activity) => {
      res.render(("edit.ejs"), { activity })
    })
})






//Show Route
app.get("/activities/:id", (req, res) => {
    Activity.findById(req.params.id, (err, activity) => {
        res.render('show.ejs', { activity });
    });
});









//Listener
app.listen(PORT, (req, res) => {
  console.log(`Server is listening to port ${PORT}`);
});
