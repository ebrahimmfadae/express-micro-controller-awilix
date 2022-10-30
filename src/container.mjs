import awilix from "awilix"

export const container = awilix.createContainer({
   injectionMode: awilix.InjectionMode.PROXY,
})

container.register({
   pi: awilix.asValue(Math.PI),
   e: awilix.asValue(Math.E),
})

export const controllerBuilder = (controller) => Object.fromEntries(Object.entries(controller).map(([key, value]) => [key, awilix.asFunction(value)]))