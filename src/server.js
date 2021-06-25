/** Import express */
const express = require("express");

/** Import route to require ./route.js a file to route all the necessary links inside our html*/
const route = require("./route");

/** Needeto import to be possible to set the route */
const path = require("path");

/** Set the Server to be express + function */
const server = express();

/** Set a view engine to show the work, in another words who is in charge of the view engine?*/
server.set("view engine", "ejs");

/** Using the static path from the public folder */
server.use(express.static("public"));

/*
! Normally the view is originated on the root directory from the application, this is a another way to redirect the path.
? __dirname = src/, in this case the __dirname is a variable that takes any path that is inside.
? __dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.
? Now, if we want to set the standard "views" folder to another name, for example, only "view" or any other name, we can now.
! path.join, join the path to the next string inside the function, in this case "views".
*/

server.set("views", path.join(__dirname, "views"));

/** Request express to use route */
server.use(route);

/** Set the server to listen the 3000 port and console a "working" */
server.listen(3000, () => console.log("RODANDO"));
