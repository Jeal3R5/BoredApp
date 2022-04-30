//This is from the magic 8 ball, use this to generate a number

const { append } = require("express/lib/response");
const activities = require("./models/activitySeed");

//const { append } = require("express/lib/response");

// const res = require("express/lib/response");
// const activities = require("./models/activitySeed");


// const magicResponses = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not good', 'Very doubtful'];

// //Create a rout of '/magic', should expect phrase in URL asking question
// app.get("/magic/:question", (req, res) => {
//     let randomNum = Math.floor(Math.random() * magicResponses.length);
//     let myResponse = magicResponses[randomNum];
//     res.send(`<h1>${req.params.question} <br /> ${myResponse}</h1>`)
// });


append.get("/activities/randomActivity", (req, res) => {
    let randomActIndex = Math.floor(Math.random() * activities.length);
    let randomAct = activities[randomActIndex];
    res.render()
})




//Use that number to get an activity from the database array and display that activity name which will also be a link to that activities

//append.get('/')
// let randomIndex = Math.floor(Math.random() * activities.length);
// let newRandomActivity = activities[randomIndex]
// res.render("show.ejs")