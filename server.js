const express = require("express");
const cors = require('cors'); //CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const path = require("path"); //The path module provides utilities for working with file and directory paths.
const request = require('request');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5060; //checks if we have an environment value called PORT, if not we're using the 5060

/**Middleware functions are functions that have access to the request object (req), 
 * the response object (res), and the next middleware function in the application’s request-response cycle. 
 * The next middleware function is commonly denoted by a variable named next. 
 * */

//"__dirname" variable = The directory name of the current module. This is the same as the path.dirname() of the __filename.
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static"))); //The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

app.use(bodyParser.urlencoded({extended: true}));

app.set('/api', require("./frontend/static/js/routes.js"));

app.use(cors());

//Routes HTTP GET requests to the specified path with the specified callback functions
app.get("/*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
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

app.post("/addTask", (req, res) => {
    console.log(req.body);
    updateDB(req.body.add__button);
    console.log("Called task adding");
    res.status(200).json("Funziona");
})

app.post("/hello", (req, res) => {
    res.status(200).json("hello");
});


function updateDB(postData)
{
    const requestOptions = {
        uri: `http://localhost:3000/api/instance/create`,
        json:true,
        body:{
            title: postData,
            parentId: "td_08341ebd-7315-41e9-9984-12337a901319",
            props:[]
        },
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'apikey': 'abcdefghijklmnopqrstuvwxyz'
        }
    }
    console.log(requestOptions);
    request.post(requestOptions, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
    console.log(`Status: ${res.statusCode}`);
    console.log(body);
    });
}
