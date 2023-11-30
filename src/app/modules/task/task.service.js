import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError.js'
import Task from './task.model.js'


const createTask = async (data)=> {
  const newTask = await Task.create(data);
  return newTask
}

const getAllTasks = async () => {

  const result = await Task.find();
  return result
}

const getSingleTask = async (id) => {
  const result = await Task.findById(id)
  return result
}

const updateTask = async (
  id,
  payload
)=> {
  const isExist = await Task.findOne({ _id: id })

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Task not found !')
  }
  const { ...TaskData } = payload

  const updatedTaskData= { ...TaskData }

  const result = await Task.findOneAndUpdate({ _id: id }, updatedTaskData, {
    new: true,
  })
  return result
}

const deleteTask = async (id) => {
  const result = await Task.findByIdAndDelete({ _id: id })
  return result
}

export const taskService = {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
}
