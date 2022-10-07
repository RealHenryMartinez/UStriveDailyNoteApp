const mongoose = require("mongoose");

const weeklySchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Weekly', weeklySchema);