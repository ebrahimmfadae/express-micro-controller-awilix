import awilix from "awilix"
import { container, controllerBuilder } from "./container.mjs"
import { Router } from "express"
import * as controller from "./controller.mjs"

container.register(controllerBuilder(controller))

const router = Router()

export default () => router.get('/pi', container.cradle.piController)
   .get('/e', container.cradle.eController)