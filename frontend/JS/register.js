/* =====================================================
   CareerConnect - Register Page JavaScript
===================================================== */


/* =========================
   GET FORM ELEMENTS
========================= */

const registerForm =
    document.getElementById("registerForm");

const fullNameInput =
    document.getElementById("fullName");

const emailInput =
    document.getElementById("registerEmail");

const passwordInput =
    document.getElementById("registerPassword");

const confirmPasswordInput =
    document.getElementById("confirmPassword");

const termsCheckbox =
    document.getElementById("terms");


/* =========================
   GET ERROR ELEMENTS
========================= */

const fullNameError =
    document.getElementById("fullNameError");

const emailError =
    document.getElementById("registerEmailError");

const passwordError =
    document.getElementById("registerPasswordError");

const confirmPasswordError =
    document.getElementById("confirmPasswordError");

const roleError =
    document.getElementById("roleError");


/* =========================
   PASSWORD BUTTONS
========================= */

const toggleRegisterPassword =
    document.getElementById("toggleRegisterPassword");

const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");


/* =========================
   SHOW / HIDE PASSWORD
========================= */

toggleRegisterPassword.addEventListener(
    "click",
    function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            toggleRegisterPassword.textContent = "Hide";

            toggleRegisterPassword.setAttribute(
                "aria-label",
                "Hide password"
            );

        } else {

            passwordInput.type = "password";

            toggleRegisterPassword.textContent = "Show";

            toggleRegisterPassword.setAttribute(
                "aria-label",
                "Show password"
            );

        }

    }
);


/* =========================
   SHOW / HIDE CONFIRM PASSWORD
========================= */

toggleConfirmPassword.addEventListener(
    "click",
    function () {

        if (confirmPasswordInput.type === "password") {

            confirmPasswordInput.type = "text";

            toggleConfirmPassword.textContent = "Hide";

            toggleConfirmPassword.setAttribute(
                "aria-label",
                "Hide password"
            );

        } else {

            confirmPasswordInput.type = "password";

            toggleConfirmPassword.textContent = "Show";

            toggleConfirmPassword.setAttribute(
                "aria-label",
                "Show password"
            );

        }

    }
);


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

    /*
       Password should contain
       minimum 6 characters.
    */

    return password.length >= 6;

}


/* =========================
   NAME VALIDATION
========================= */

function validateName(name) {

    /*
       Name should contain
       minimum 3 characters.
    */

    return name.length >= 3;

}


/* =========================
   CLEAR ERROR WHILE TYPING
========================= */

fullNameInput.addEventListener(
    "input",
    function () {

        fullNameError.textContent = "";

    }
);


emailInput.addEventListener(
    "input",
    function () {

        emailError.textContent = "";

    }
);


passwordInput.addEventListener(
    "input",
    function () {

        passwordError.textContent = "";

    }
);


confirmPasswordInput.addEventListener(
    "input",
    function () {

        confirmPasswordError.textContent = "";

    }
);


/* =========================
   REGISTER FORM SUBMIT
========================= */

registerForm.addEventListener(
    "submit",
    function (event) {

        /*
           Stop browser from
           submitting the form.
        */

        event.preventDefault();


        /* =========================
           GET VALUES
        ========================== */

        const fullName =
            fullNameInput.value.trim();

        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value;

        const confirmPassword =
            confirmPasswordInput.value;


        /* =========================
           GET SELECTED ROLE
        ========================== */

        const selectedRole =
            document.querySelector(
                'input[name="role"]:checked'
            );


        /* =========================
           CLEAR PREVIOUS ERRORS
        ========================== */

        fullNameError.textContent = "";

        emailError.textContent = "";

        passwordError.textContent = "";

        confirmPasswordError.textContent = "";

        roleError.textContent = "";


        /* =========================
           VALIDATION STATUS
        ========================== */

        let isValid = true;


        /* =========================
           NAME VALIDATION
        ========================== */

        if (fullName === "") {

            fullNameError.textContent =
                "Please enter your full name.";

            isValid = false;

        } else if (!validateName(fullName)) {

            fullNameError.textContent =
                "Name must contain at least 3 characters.";

            isValid = false;

        }


        /* =========================
           EMAIL VALIDATION
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
           ROLE VALIDATION
        ========================== */

        if (!selectedRole) {

            roleError.textContent =
                "Please select your account type.";

            isValid = false;

        }


        /* =========================
           PASSWORD VALIDATION
        ========================== */

        if (password === "") {

            passwordError.textContent =
                "Please create a password.";

            isValid = false;

        } else if (!validatePassword(password)) {

            passwordError.textContent =
                "Password must contain at least 6 characters.";

            isValid = false;

        }


        /* =========================
           CONFIRM PASSWORD
        ========================== */

        if (confirmPassword === "") {

            confirmPasswordError.textContent =
                "Please confirm your password.";

            isValid = false;

        } else if (password !== confirmPassword) {

            confirmPasswordError.textContent =
                "Passwords do not match.";

            isValid = false;

        }


        /* =========================
           TERMS CHECK
        ========================== */

        if (!termsCheckbox.checked) {

            alert(
                "Please agree to the Terms & Conditions."
            );

            isValid = false;

        }


        /* =========================
           STOP IF INVALID
        ========================== */

        if (!isValid) {

            return;

        }


        /* =========================
           GET ROLE VALUE
        ========================== */

        const role =
            selectedRole.value;


        /* =========================
           TEMPORARY SUCCESS
        ========================== */

        alert(
            `Registration form is valid!\n\n` +
            `Name: ${fullName}\n` +
            `Role: ${role}\n\n` +
            `Backend registration will be connected later.`
        );


        /*
           IMPORTANT:

           This is NOT real registration yet.

           Later this data will be sent to:

           Node.js
                ↓
           Express API
                ↓
           MySQL Database
                ↓
           Password Hashing
                ↓
           User Account
        */

    }
);