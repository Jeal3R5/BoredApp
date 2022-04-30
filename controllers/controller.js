// const express = require("express");
// const Activity = require("../models/activity");
// const activitySeed = require("../models/activitySeed");
// const activityRouter = express.Router();

// activityRouter.get("/seed", (req, res) => {
//   Activity.deleteMany({}, (err, deletedActivities) => {
//     Activity.create(activitySeed, (err, data) => {
//       res.redirect("/activities");
//     });
//   });
// });



// //Index Route
// activityRouter.get("/activities", async (req, res) => {
//     //go get activities
//     await Activity.find({}).catch((err) => res.send(err));
//     //render index.js
//     res.render("index.ejs", { activities });
//     //console.log(activities)
//   });