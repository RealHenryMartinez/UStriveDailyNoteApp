
// importing models to controller
const ToDoModel = require('../models/ToDoModel');


module.exports.getToDo = async (req, res) => {
    // get to do -> finding the model
    const Todo = await ToDoModel.find();
    res.send(Todo);
}

module.exports.saveToDo = async (req, res) => {
    // get to do -> finding the model
    // getting text
    const { text }= req.body;
    // creating the text model
    ToDoModel
        .create({ text })
        .then(() => res.set(201).send("Added successfully..."))
        .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    // get response from req.body
    const {_id} = req.body

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err))
}

module.exports.updateToDo = async (req, res) => {
    // get response from req.body
    const {_id, text} = req.body

    ToDoModel
        .findByIdAndUpdate(_id, {text})
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err))
}
