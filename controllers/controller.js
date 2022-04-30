// const express = require("express");
// const Activity = require("../models/activity");
// const activitySeed = require("../models/activitySeed");
// const activityRouter = express.Router();



// //Index Route
// activityRouter.get("/activities", async (req, res) => {
//     //go get activities
//     await Activity.find({}).catch((err) => res.send(err));
//     //render index.js
//     res.render("index.ejs", { activities });
//     //console.log(activities)
//   });



// //Seed Route
// activityRouter.get("/activities/seed", async (req, res) => {
//     //delete all existing activities
//     await Activity.remove({}).catch((err) => res.send(err));
//     //add your sample activities
//     //console.log(activities)
//     await Activity.create(activities).catch((err) => res.send(err));
//     //send the activities as json
//     res.json(activities)
//   });


// //RandomActivityGenerator Route
// activityRouter.get("/randAct", (req, res) => {
//     Activity.find(req.params.id, (err, activities) => {
//     let randomIndexGen = Math.floor(Math.random() * activities.length);
//     let randomAct = activities[randomIndexGen]
//       res.render("show.ejs", {activity: randomAct}) 
//     })
//   })



// //Search Route
// activityRouter.get("/search", (req, res) => {
//     //search for activity type
//     //console.log(req.query.type)
//     Activity.find({ type: req.query.type }, (err, activities) => {
//       //console.log(activities)
//       let randomIndex = Math.floor(Math.random() * activities.length);
//       let newActivity = activities[randomIndex]
//       res.render("show.ejs", {activity: newActivity})
//     })
//   })



// //New Route
// activityRouter.get('/activities/new', (req, res) => {
//     res.render('new.ejs')
// });



// //Delete Route
// activityRouter.delete("/activities/:id", (req, res) => {
//     Activity.findByIdAndDelete(req.params.id, (err, deletedActivity) => {
//      res.redirect("/activities")
//    })
//  })
 

// //Update Route
// activityRouter.put('/activities/:id',  (req, res) => {
//     Activity.findByIdAndUpdate(req.params.id, req.body, (err, updatedActivity) => {
//         if (err) console.log(err);
//         res.redirect(`/activities/${req.params.id}`);
//     })
// });




// //Create Route
// activityRouter.post('/activities', (req, res) => {
//     //create the activity
//    // console.log(req.body)
//     Activity.create(req.body).catch((err) => res.send(err))
//     //redirect back to main page
//     res.redirect('/activities')
// })




// //Edit Route
// activityRouter.get("/activities/:id/edit",  ( req, res) => {
//     Activity.findById(req.params.id, (err, activity) => {
//      res.render(("edit.ejs"), { activity })
//    })
// })




// //Show Route
// activityRouter.get("/activities/:id", (req, res) => {
//     Activity.findById(req.params.id, (err, activity) => {
//         res.render('show.ejs', { activity });
//     });
// });



