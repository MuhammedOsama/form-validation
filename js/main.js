// declare variables
const fullName = document.getElementById("full-name");
const emailAddress = document.getElementById("email-address");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const btnSubmit = document.getElementById("btn-submit");

// error message
const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorPhoneNumber = document.getElementById("error-phone-number");
const errorPassword = document.getElementById("error-password");
const errorConfirmPassword = document.getElementById("error-confirm-password");

// error character messages
const errorFullNameCharacters = document.getElementById("error-full-name-characters");
const errorPasswordCharacters = document.getElementById("error-password-characters");
const errorConfirmPasswordCharacters = document.getElementById("error-confirm-password-characters");
const errorMatch = document.getElementById("error-match");

btnSubmit.addEventListener("click", _ => {
    // check full name
    if (fullName.value === "") {
        errorName.style.display = "block";
        fullName.style.borderColor = "#D80027";
    } else if (fullName.value.length < 3) {
        errorName.style.display = "none";
        errorFullNameCharacters.style.display = "block";
    } else {
        errorName.style.display = "none";
        fullName.style.borderColor = "#D6D6D6";
        errorFullNameCharacters.style.display = "none";
    }

    // check email address
    if (emailAddress.value === "") {
        errorEmail.style.display = "block";
        emailAddress.style.borderColor = "#D80027";
    } else {
        errorEmail.style.display = "none";
        emailAddress.style.borderColor = "#D6D6D6";
    }

    // check phone number
    if (phoneNumber.value === "") {
        errorPhoneNumber.style.display = "block";
        phoneNumber.style.borderColor = "#D80027";
    } else {
        errorPhoneNumber.style.display = "none";
        phoneNumber.style.borderColor = "#D6D6D6";
    }

    // check password
    if (password.value === "") {
        errorPassword.style.display = "block";
        password.style.borderColor = "#D80027";
    } else if (password.value.length < 8) {
        errorPassword.style.display = "none";
        errorPasswordCharacters.style.display = "block";
    } else {
        errorPassword.style.display = "none";
        password.style.borderColor = "#D6D6D6";
        errorPasswordCharacters.style.display = "none";
    }

    // check confirm password
    if (confirmPassword.value === "") {
        errorConfirmPassword.style.display = "block";
        confirmPassword.style.borderColor = "#D80027";
    } else if (confirmPassword.value.length < 8) {
        errorConfirmPassword.style.display = "none";
        confirmPassword.style.borderColor = "#D6D6D6";
        errorConfirmPasswordCharacters.style.display = "block";
    } else if (password.value !== confirmPassword.value) {
        errorConfirmPasswordCharacters.style.display = "none";
        errorMatch.style.display = "block";
    } else {
        errorConfirmPassword.style.display = "none";
        errorConfirmPasswordCharacters.style.display = "none";
        errorMatch.style.display = "none";
    }

    if (fullName.value !== "" && fullName.value.length >= 3 && emailAddress.value !== "" && phoneNumber.value !== "" && password.value !== "" && password.value.length >= 8 && confirmPassword.value !== "" && confirmPassword.value.length >= 8 && password.value === confirmPassword.value) {
        location.href = ("address.html");
    }
});
