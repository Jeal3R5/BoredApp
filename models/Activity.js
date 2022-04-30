 //Schemes and Models
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema(
    {
        activity: { type: String, required: true },
        type: { type: String, required: true },
        participants: { type: String, required: true },
        price: { type: Boolean, required: true, default: false },
        link: { type: String, required: false }
    })
    
    const Activity = mongoose.model("Activity", activitySchema)
    
    module.exports = Activity