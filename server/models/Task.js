// Require mongoose
const mongoose = require('mongoose');

// Implement schema for a task
// Each task should have:
// - title (String, required)
// - done (Boolean, defaults to false)

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

// Export the model as 'Task'
module.exports = mongoose.model('Task', taskSchema);