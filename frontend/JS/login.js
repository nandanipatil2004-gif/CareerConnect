/* =====================================================
   CareerConnect - Login Page JavaScript (Backend Integrated)
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // HTML Elements
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email") || document.getElementById("loginEmail");
    const passwordInput = document.getElementById("password") || document.getElementById("loginPassword");
    const togglePassword = document.getElementById("togglePassword");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // =========================
    // SHOW / HIDE PASSWORD
    // =========================
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", function () {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePassword.textContent = "Hide";
                togglePassword.setAttribute("aria-label", "Hide password");
            } else {
                passwordInput.type = "password";
                togglePassword.textContent = "Show";
                togglePassword.setAttribute("aria-label", "Show password");
            }
        });
    }

    // Input listeners to clear errors
    if (emailInput && emailError) {
        emailInput.addEventListener("input", () => { emailError.textContent = ""; });
    }
    if (passwordInput && passwordError) {
        passwordInput.addEventListener("input", () => { passwordError.textContent = ""; });
    }

    // =========================
    // LOGIN FORM SUBMIT (BACKEND API)
    // =========================
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const email = emailInput ? emailInput.value.trim() : "";
            const password = passwordInput ? passwordInput.value.trim() : "";

            if (!email || !password) {
                alert("Please enter both Email and Password.");
                return;
            }

            try {
                // Call Node.js Backend Login API
                const response = await fetch("http://localhost:5000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    // Save User Data & JWT Token in Browser
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));

                    alert("Login Successful! Welcome " + data.user.name);

                    // Redirect according to Role
                    if (data.user.role === "recruiter") {
                        window.location.href = "./recruiter-dashboard.html";
                    } else {
                        window.location.href = "./index.html";
                    }
                } else {
                    alert("Login Failed: " + (data.message || "Invalid Email or Password"));
                }
            } catch (error) {
                console.error("Login Error:", error);
                alert("Server Error! Make sure your Node.js backend server is running on port 5000.");
            }
        });
    }
});