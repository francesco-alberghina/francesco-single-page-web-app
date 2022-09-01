//importing modules
import AccountManagement from "./views/AccountManagement.js";
import Dashboard from "./views/Dashboard.js"; //Dashboard is the export from the module imported
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

/*
    The URL interface is used to parse, construct, normalize, and encode URLs. 
    It works by providing properties which allow you to easily read and modify the components of a URL.
    You normally create a new URL object by specifying the URL as a string when calling its constructor, 
    or by providing a relative URL and a base URL. 
    You can then easily read the parsed components of the URL or make changes to the URL.
*/

//saving the value of the url in a const called navigateTo
const navigateTo = url => {
    history.pushState(null, null, url); //The history.pushState() method adds an entry to the browser's session history stack. 
    routerOne();
};


//---------------------------------------------------------------------------------------------ROUTERS---------------------------------------------------------------------------------------------

//creation of the router function
const routerOne = async() => {
    //array of routes
    const routes = [
        {path: "/", view: Dashboard}, //definition of a new object
        {path: "/posts", view: Posts},
        {path: "/settings", view: Settings},
        {path: "/account", view: AccountManagement}
    ];

    //test each route for potential match and creates a new array that contains all the possible and impossible routes to catch
    const potentialMatches = routes.map(route => {
        return{
            route:route, //
            isMatch:location.pathname === route.path //boolean value
        };
    });

    //finds the first possible route inside the array
    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

    if(!match) //if there's no route, the default route is seto to the Dashboard
    {
        match = {
            route:routes[0],
            isMatch:true
        };
    }

    //creating a new instance of the view at the matchedroute
    const view = new match.route.view();

    //The Element property innerHTML gets or sets the HTML or XML markup contained within the element. 
    document.querySelector('#app').innerHTML = await view.getHtml();
};


//second router that gets the 
const routerTwo = async(e) => {
    //array of routes
    const routes = [
        {path: "signup", view: switchForm}, //definition of a new object
        {path: "login", view: switchForm}
    ];

    //test each route for potential match and creates a new array that contains all the possible and impossible routes to catch
    const potentialMatches = routes.map(route => {
        return{
            route:route, //
            isMatch:location.pathname === route.path //boolean value
        };
    });

    //finds the first possible route inside the array
    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

    if(!match) //if there's no route, the default route is seto to the Dashboard
    {
        match = {
            route:routes[0],
            isMatch:true
        };
    }

    //console.log(e);

    //creating a new instance of the view at the matched route
    match.route.view(e); //calling the switchForm by passing e
};

window.addEventListener("popstate", routerOne); //The popstate event of the Window interface is fired when the active history entry changes while the user navigates the session history

function hello()
{
    alert("Hello");
}



window.addEventListener("popstate", routerOne);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-function]")){ //checkif the sender is a tag with the "data-function" attribute
            e.preventDefault();
            routerTwo(e);
        }
        else if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    routerOne(); //call of the main router function to navigate bewteen the various views
});

//----------------FUNCTIONS----------------

function setFormMessage(formElement, type, message){
    const messageElement= formElement.querySelector(".form__message");

    messageElement.textContent = message; //sets the current message basing on the essage pram.
    messageElement.classList.remove("form__message--success","form__message--error"); //current class remove
    messageElement.classList.add(`form__message--${type}`); //sets the message of the new type
}

function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

//resets the content of the input element given
function clearInputContent(inputElement)
{
    inputElement.value = null;
}

function clearInputError(inputElement)
{
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}


//----------------ADDING EVENTS LISTENERS----------------



//TODO: switch function FIX
function switchForm(e){
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    if(e.target.getAttribute("data-param") === "one")
    {
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

        //foreach cycle that passes all the "form__input-login" elements and calls the clearInputcontent function on every one
        document.querySelectorAll(".form__input-login").forEach((inputElement) =>{
            clearInputContent(inputElement);
        });

        setFormMessage(loginForm, "success", ""); //sets the class ofthe item to success, and the message disappears
    }    
    if(e.target.getAttribute("data-param") === "two")
    {
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");

        //foreach cycle that passes all the "form__input-login" elements and calls the clearInputcontent function on every one
        document.querySelectorAll(".form__input-login").forEach((inputElement) =>{
            clearInputContent(inputElement);
        });

        setFormMessage(createAccountForm, "success", ""); //sets the class ofthe item to success, and the message disappears
    }    
};

/*
document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelectorAll(".form__input-signup").forEach((inputElement) =>{
        clearInputContent(inputElement);
    });

    document.querySelectorAll(".form__input-login").forEach((inputElement) =>{
        clearInputContent(inputElement);
    });    

    /*
    //adds an event to che element with the "linklogin" id, which is a button
    document.querySelector("#linkLogin").addEventListener("click", (e) => {
        e.preventDefault(); //prevents the default behaviour of the sender
        loginForm.classList.remove("form--hidden"); //adds this form to the "form--hidden" class
        createAccountForm.classList.add("form--hidden"); //rmeoves the other one from the class (makesitvisible)


        //foreach cycle that passes all the "form__input-signup" elements and calls the clearInputcontent function on every one
        document.querySelectorAll(".form__input-signup").forEach((inputElement) =>{
            clearInputContent(inputElement);
        });

        setFormMessage(createAccountForm, "success", "");
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let emptyInput = false;

        document.querySelectorAll(".form__input-login").forEach((inputElement) =>
        {
            if(inputElement.value === null || inputElement.value.length === 0)
                emptyInput = true;
        })
        
        if(emptyInput)
        {
            setFormMessage(loginForm, "error", "One or more parameters are empty!");
        }
        else
        {
           //TODO : account LOGIN
            //setFormMessage(loginForm, "error", "Incorrect username/password combination!"); //temporary instruction
        }
    });

    createAccountForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        
        let emptyInput = false;

        document.querySelectorAll(".form__input-signup").forEach((inputElement) =>
        {
            if(inputElement.value === null || inputElement.value.length === 0)
                emptyInput = true;
        })
        
        if(emptyInput)
        {
            setFormMessage(createAccountForm, "error", "One or more parameters are empty!");
        }
        else
        {
            //TODO : account CREATION
            setFormMessage(createAccountForm, "error", "Incorrect signup"); //temporary instruction
        }
        
    });


    document.querySelectorAll(".form__input-signup").forEach(inputElement => {
        inputElement.addEventListener("blur", (e) => {
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 4)
            {
                setInputError(inputElement, "Username must be at least 4 characters in length");
            }
        })

        inputElement.addEventListener("input", (e) => {
            clearInputError(inputElement);
        });
    });
});

*/