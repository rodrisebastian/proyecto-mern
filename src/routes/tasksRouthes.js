import {Router} from 'express';
import {
    createTask,
    deleteTask,
    getTask,
    getTasks,
    updateTask,
  } from "../controllers/tasksControllers.js";
  import { authRequired } from "../middlewares/authMiddleware.js";
  import { validateSchema } from "../middlewares/validatorMiddleware.js";
  import { createTaskSchema } from "../schemas/taskSchema.js";
  
  const router = Router();
  
  router.get("/tasks", authRequired, getTasks);
  
  router.post("/tasks", authRequired, validateSchema(createTaskSchema), createTask);
  
  router.get("/tasks/:id", authRequired, getTask);
  
  router.put("/tasks/:id", authRequired, updateTask);
  
  router.delete("/tasks/:id", authRequired, deleteTask);
  
  export default router;