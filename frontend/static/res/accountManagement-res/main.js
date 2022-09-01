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

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelectorAll(".form__input-signup").forEach((inputElement) =>{
        clearInputContent(inputElement);
    });

    document.querySelectorAll(".form__input-login").forEach((inputElement) =>{
        clearInputContent(inputElement);
    });

    document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

        //foreach cycle that passes all the "form__input-login" elements and calls the clearInputcontent function on every one
        document.querySelectorAll(".form__input-login").forEach((inputElement) =>{
            clearInputContent(inputElement);
        });

        setFormMessage(loginForm, "success", ""); //sets the class ofthe item to success, and the message disappears
    });

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
            setFormMessage(loginForm, "error", "Incorrect username/password combination!"); //temporary instruction
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