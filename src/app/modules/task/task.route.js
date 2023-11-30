import express from 'express'
import validateRequest from '../../middlewares/validateRequest.js'

import {taskController} from "./task.controller.js"
import { taskValidation } from './task.validate.js'

const router = express.Router()

router.post(
  '/create',
  validateRequest(taskValidation.createTaskZodSchema),
  taskController.createTask
)
router.patch(
  '/:id',


  taskController.updateTask
)
router.get(
  '/',
  
  taskController.getAllTasks
)
router.get(
  '/:id',

  taskController.getSingleTask
)
router.delete('/:id',
taskController.deleteTask)

export const taskRoutes = router
