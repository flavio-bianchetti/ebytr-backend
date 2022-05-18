import { Router } from 'express';
import * as cors from 'cors';
import { UserController } from '../controllers';

const routes = Router();

routes.use(cors());

routes.post('/login', UserController.login);

routes.post('/create', UserController.create);

export default routes;
