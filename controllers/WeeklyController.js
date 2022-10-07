
// importing models to controller
const WeeklyModel = require('../models/WeeklyModel');


module.exports.getWeekly = async (req, res) => {
    // get to do -> finding the model
    const Weekly = await WeeklyModel.find();
    res.send(Weekly);
}

module.exports.saveWeekly = async (req, res) => {
    // get to do -> finding the model
    // getting text
    const { text }= req.body;
    // creating the text model
    WeeklyModel
        .create({ text })
        .then(() => res.set(201).send("Added successfully..."))
        .catch((err) => console.log(err))
}

module.exports.deleteWeekly = async (req, res) => {
    // get response from req.body
    const {_id} = req.body

    WeeklyModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err))
}

module.exports.updateWeekly = async (req, res) => {
    // get response from req.body
    const {_id, text} = req.body

    WeeklyModel
        .findByIdAndUpdate(_id, {text})
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err))
}
