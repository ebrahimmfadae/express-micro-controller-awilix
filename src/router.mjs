import awilix from "awilix"
import { container, controllerBuilder } from "./container.mjs"
import { Router } from "express"
import * as controller from "./controller.mjs"

const scope = container.createScope()
scope.register(controllerBuilder(controller))

const router = Router()

export default () => router.get('/pi', scope.cradle.piController)
   .get('/e', scope.cradle.eController)