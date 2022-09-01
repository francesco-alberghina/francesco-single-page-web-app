const express = require("express");
const path = require("path"); //The path module provides utilities for working with file and directory paths.

const app = express();

/**Middleware functions are functions that have access to the request object (req), 
 * the response object (res), and the next middleware function in the application’s request-response cycle. 
 * The next middleware function is commonly denoted by a variable named next. 
 * */

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));


//Routes HTTP GET requests to the specified path with the specified callback functions
app.get("/*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 5060, function(){
    console.log(`Server running...`);
});

app.post("/login", (req, res) => {
    console.log("Called login");
});

app.post("/signup", (req, res) => {
    console.log("Called signup");
});