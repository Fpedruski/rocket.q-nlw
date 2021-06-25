/* Import express */
const express = require("express");

/** Set to route express inside to be route + function */
const route = express.Router();

route.get("/", (req, res) => res.render("index"));

/** ANCHOR Important to export the route comomand, this means the const route = express.Route() is exported automatically by the module and start to use the rendered index, we can fix another route for example with route.get(/home), (req, res) => res.render("home")) so the //./home request in the route.get */
module.exports = route;
