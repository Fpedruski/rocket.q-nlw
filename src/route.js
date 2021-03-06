/* Import express */
const express = require("express");
const questionController = require("./controller/questionController")

/** Set to route express inside to be route + function */
const route = express.Router();

route.get("/", (req, res) => res.render("index"));
route.get("/room", (req, res) => res.render("room"));
route.get("/create-pass", (req, res) => res.render("create-pass"));

/** ":" Works as variable to identify something that in the future will be labed */

route.post('/room/:room/:question/:action', questionController.index);

/** ANCHOR Important to export the route comomand, this means the const route = express.Route() is exported automatically by the module and start to use the rendered index, we can fix another route for example with route.get(/home), (req, res) => res.render("home")) so the //./home request in the route.get */
module.exports = route;
