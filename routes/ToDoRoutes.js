

const { Router } = require('express');

const router = Router();

const { getToDo, saveToDo, deleteToDo, updateToDo } = require('../controllers/ToDoController')

const { getWeekly, saveWeekly, deleteWeekly, updateWeekly } = require('../controllers/WeeklyController')
// route -> call function 

// get one to do
router.get("/get-todo", getToDo);

// create a list
router.post("/save-todo", saveToDo);

// delete a list
router.post("/delete-todo", deleteToDo);

// update a lite
router.post("/update-todo", updateToDo);

// ROUTERS FOR WEEKLY GOALS


router.get("/get-weekly", getWeekly);

// create a list
router.post("/save-weekly", saveWeekly);

// delete a list
router.post("/delete-weekly", deleteWeekly);

// update a lite
router.post("/update-weekly", updateWeekly);

// export the router being the Router()
module.exports = router;