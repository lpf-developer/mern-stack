const route = require("express").Router()
const userController = require("../controllers/user.controller.js")
route.get("/", userController.soma)
module.exports = route