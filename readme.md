## Arquivo src/controllers/user.controller.js

```js
const soma = (req, res) => {
    const soma = 100 + 1
    res.send({soma: soma})
}
module.exports = {soma}
```
## Arquivo src/routes/user.route.js

```js
const route = require("express").Router()
const userController = require("../controllers/user.controller.js")

route.get("/soma", userController.soma)

module.exports = route
```

## Arquivo index.js

```js
const express = require('express')
const userRoute = require('./src/routes/user.route.js')
const app = express()

app.use("/soma", userRoute)

app.listen(3000)
```
