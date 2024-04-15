const app = {
    form: undefined,
    emailForm: undefined,
    emailError: undefined,
    showError: () => {
        if (emailForm.validity.valueMissing) {
            // If the field is empty,
            // display the following error message.
            emailError.textContent = "Email required";
        } else if (emailForm.validity.typeMismatch) {
            // If the field doesn't contain an email address,
            // display the following error message.
            emailError.textContent = "Valid email required";
        } else if (emailForm.validity.tooShort) {
            // If the data is too short,
            // display the following error message.
            emailError.textContent = `${emailForm.minLength} characters mini`;
        }
    },
    handleInput: (event) => {
        if (emailForm.validity.valid) {
            emailError.textContent = ""
            emailError.className = "errorInput"
        } else {
            app.showError();
        }
    },
    handleSubmit: (event) => {
        event.preventDefault();
        if (!emailForm.validity.valid) {
            app.showError();
        } else {
            document.querySelectorAll(".success_message,.newsletter_form").forEach(elt => elt.classList.toggle("hidden"))
            document.querySelector(".success_message .enteredEmail").textContent = emailForm.value
        }
    },
    init: () => {
        form = document.querySelector("form");
        emailForm = document.querySelector(".emailForm");
        emailError = document.querySelector(".emailForm+.errorInput");
        form.addEventListener("submit", app.handleSubmit)
        emailForm.addEventListener("input", app.handleInput)
        document.querySelector(".dismiss").addEventListener("click", e => document.querySelectorAll(".success_message,.newsletter_form").forEach(elt => elt.classList.toggle("hidden"))
        )
    }
}

document.addEventListener("DOMContentLoaded", app.init)