const mongoose =  require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    priority: { type: Number, required: true},
    dueDate: { type: Date, required: true},
    focusTime: { type: Number, default: 25},
});

module.exports = mongoose.model('Task', taskSchema);
