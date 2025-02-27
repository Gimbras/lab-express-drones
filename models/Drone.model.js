// Iteration #1
const mongoose = require("mongoose")
const DroneSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    propellers : {
        type: Number,
        required: true
    },
    maxSpeed : {
        type: Number,
        required: true
    },
});
const DroneModel = mongoose.model('Drone' , DroneSchema)
module.exports = DroneModel