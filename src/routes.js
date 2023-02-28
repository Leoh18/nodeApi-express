import { Router } from "express"

import UserController from "./controllers/UserController"

const Routes = Router()

Routes.get('/users', UserController.index)
Routes.post('/user', UserController.store)
Routes.patch('/user', UserController.edit) 

export default Routes
