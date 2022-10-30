import Express from "express"
import router from "./router.mjs"

const PORT = 3000

const app = Express()

app.use(router())

app.listen(PORT, () => console.log(`server started listening on port ${PORT}...`))