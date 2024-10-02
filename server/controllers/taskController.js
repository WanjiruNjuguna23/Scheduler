// server/controllers/taskController.js
const Task = require('../models/Task');  



// get all tasks
const getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};


// create new task
const createTask = async (req, res) => {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.json(savedTask);
};

// update task
const updateTask = async (req, res) => {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.json(updateTask);
};

// delete task
const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
};

module.exports = { getTasks, createTask, updateTask, deleteTask};