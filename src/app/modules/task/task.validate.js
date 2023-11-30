import { z } from 'zod'

// Zod validation schema
const createTaskZodSchema = z.object({
  body: z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  isComplete: z.boolean().default(false)
  }),
})
const updateTaskZodSchema = z.object({
  body: z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  date: z.string().optional(),
  isComplete: z.boolean().default(false)
  }),
})

export const taskValidation = {
  createTaskZodSchema,
  updateTaskZodSchema,
}
