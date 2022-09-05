const express = require("express");
const path = require("path"); //The path module provides utilities for working with file and directory paths.

const app = express();
const PORT = process.env.PORT || 5060;

/**Middleware functions are functions that have access to the request object (req), 
 * the response object (res), and the next middleware function in the application’s request-response cycle. 
 * The next middleware function is commonly denoted by a variable named next. 
 * */


//The "__dirname" variable = The directory name of the current module. This is the same as the path.dirname() of the __filename.
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static"))); //The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

//Routes HTTP GET requests to the specified path with the specified callback functions
app.get("/*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.get("*", function(req, res){
    res.send("<h1>Page not found</h1>");
});


//The app.listen() method returns an http.Server object
app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});

//Routes HTTP POST requests to the specified path with the specified callback functions.
app.post("/login", (req, res) => {
    console.log("Called login");
});

app.post("/signup", (req, res) => {
    console.log("Called signup");
});