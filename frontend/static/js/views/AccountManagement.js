import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
    }

    async getHtml() {

        document.add;

        return `        
        <div class="container">
            <form class="form__login" id="login" action="/login" method="post">
                <h1 class="form__title">Login</h1>
                <div class="form__message form__message--error"></div>
                <div class="form__input-group">
                    <input type="text" class="form__input-login" autofocus placeholder="Username or e-mail">
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="password" class="form__input-login" autofocus placeholder="Password">
                    <div class="form__input-error-message"></div>
                </div>
                <button class="form__button-login" type="submit">Continue</button>
                <p class="form__text">
                    <a class="form__link" href="./" id="linkCreateAccount" data-function="switch" data-param="one">Don't have an account?</a> <!--the "data-" attribute is used to store custom data private to the page or application. -->
                </p>
            </form>

            <form class="form__signup form--hidden" id="createAccount">
                <h1 class="form__title">Create Account</h1>
                <div class="form__message form__message--error"></div>
                <div class="form__input-group">
                    <input type="text" class="form__input-signup" id="signupUsername" autofocus placeholder="Username">
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="text" class="form__input-signup" autofocus placeholder="E-mail Address">
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="password" class="form__input-signup" autofocus placeholder="Password">
                    <div class="form__input-error-message"></div>
                </div>
                <div class="form__input-group">
                    <input type="password" class="form__input-signup" autofocus placeholder="Confirm Password">
                    <div class="form__input-error-message"></div>
                </div>
                <button class="form__button-signup" type="submit">Continue</button>
                <p class="form__text">
                    <a class="form__link" href="./" id="linkLogin" data-function="switch" data-param="two">Already have an account? Sign in</a> 
                </p>
            </form>
        </div>
    `;
    }
}

