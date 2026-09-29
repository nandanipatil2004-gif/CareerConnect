/* =====================================================
   CareerConnect - Login Page JavaScript
===================================================== */


/* =========================
   GET HTML ELEMENTS
========================= */

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const emailError = document.getElementById("emailError");

const passwordError = document.getElementById("passwordError");


/* =========================
   SHOW / HIDE PASSWORD
========================= */

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "Hide";

        togglePassword.setAttribute(
            "aria-label",
            "Hide password"
        );

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "Show";

        togglePassword.setAttribute(
            "aria-label",
            "Show password"
        );

    }

});


/* =========================
   EMAIL VALIDATION
========================= */

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* =========================
   PASSWORD VALIDATION
========================= */

function validatePassword(password) {

    return password.length >= 6;

}


/* =========================
   EMAIL INPUT
========================= */

emailInput.addEventListener("input", function () {

    emailError.textContent = "";

});


/* =========================
   PASSWORD INPUT
========================= */

passwordInput.addEventListener("input", function () {

    passwordError.textContent = "";

});


/* =========================
   LOGIN FORM SUBMIT
========================= */

loginForm.addEventListener("submit", function (event) {

    /*
       Prevent the browser from
       submitting the form automatically.
    */

    event.preventDefault();


    /* Get values */

    const email = emailInput.value.trim();

    const password = passwordInput.value.trim();


    /* Clear previous errors */

    emailError.textContent = "";

    passwordError.textContent = "";


    let isValid = true;


    /* =========================
       CHECK EMAIL
    ========================== */

    if (email === "") {

        emailError.textContent =
            "Please enter your email address.";

        isValid = false;

    } else if (!validateEmail(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    /* =========================
       CHECK PASSWORD
    ========================== */

    if (password === "") {

        passwordError.textContent =
            "Please enter your password.";

        isValid = false;

    } else if (!validatePassword(password)) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        isValid = false;

    }


    /* =========================
       IF FORM IS INVALID
    ========================== */

    if (!isValid) {

        return;

    }


    /* =========================
       TEMPORARY LOGIN SUCCESS
    ========================== */

    alert(
        "Login form is valid! Backend authentication will be connected soon."
    );


    /*
       IMPORTANT:

       We are NOT redirecting to
       the dashboard yet.

       Real authentication will be
       connected after Node.js,
       Express.js and MySQL are ready.
    */

});