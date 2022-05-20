import { Router } from 'express';
import * as cors from 'cors';
import { UserController, TodoController } from '../controllers';
import { ValidateJWTMiddleware, ValidateRoutesEntries } from '../middlewares';

const routes = Router();

routes.use(cors());

routes.post('/login', UserController.login);
routes.post(
  '/create',
  ValidateRoutesEntries.validateCreateUser,
  UserController.create
);

routes.post(
  '/todolist',
  ValidateRoutesEntries.validateCreateTodoTask,
  ValidateJWTMiddleware.validate,
  TodoController.create,
);
routes.get(
  '/todolist/:id',
  ValidateRoutesEntries.validateParamId,
  ValidateJWTMiddleware.validate,
  TodoController.findAll,
);
routes.put(
  '/todolist/task/:id',
  ValidateRoutesEntries.validateParamId,
  ValidateRoutesEntries.validateUpdateTodoTask,
  ValidateJWTMiddleware.validate,
  TodoController.update,
);
routes.delete(
  '/todolist/task/:id',
  ValidateRoutesEntries.validateParamId,
  ValidateJWTMiddleware.validate,
  TodoController.delete,
);

export default routes;
