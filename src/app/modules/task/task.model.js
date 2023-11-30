import mongoose from 'mongoose';


const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
 
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
