import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync.js'
import sendResponse from '../../../shared/sendResponse.js'
import { taskService } from './task.service.js'


const createTask = catchAsync(async (req, res) => {
    const { ...data } = req.body

    const result = await taskService.createTask(data)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Task Added successfully!',
      data: result,
    })
  
  
})

const getAllTasks = catchAsync(async (req, res) => {

  const result = await taskService.getAllTasks()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tasks retrieved successfully !',
    data: result,
  })
})

const getSingleTask = catchAsync(async (req, res) => {
  const id = req.params.id

  const result = await taskService.getSingleTask(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task retrieved successfully !',
    data: result,
  })
})

const updateTask = catchAsync(async (req, res) => {
  const id = req.params.id
  const updatedData = req.body

  const result = await taskService.updateTask(id, updatedData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task updated successfully !',
    data: result,
  })
})

const deleteTask = catchAsync(async (req, res) => {
  const id = req.params.id

  const result = await taskService.deleteTask(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task deleted successfully !',
    data: result,
  })
})

export const taskController = {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
}
