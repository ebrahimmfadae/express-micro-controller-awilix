import { Router } from "express"
import { container, controllerBuilder } from "./container.mjs"
import * as controller from "./controller.mjs"

const scope = container.createScope()
scope.register(controllerBuilder(controller))

const router = Router()

export default () => router.get('/pi', scope.cradle.piController)
   .get('/e', scope.cradle.eController)