document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // LOGIN PAGE VALIDATION
    // ==========================

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (email === "" || password === "") {
                alert("Please fill in all fields.");
                e.preventDefault();
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Enter a valid email address.");
                e.preventDefault();
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                e.preventDefault();
                return;
            }

            alert("Login Successful!");

        });

    }


    // ==========================
    // REGISTER PAGE VALIDATION
    // ==========================

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", function (e) {

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const terms = document.getElementById("terms");

            // Check empty fields
            if (
                name === "" ||
                email === "" ||
                phone === "" ||
                password === "" ||
                confirmPassword === ""
            ) {
                alert("Please fill in all fields.");
                e.preventDefault();
                return;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Enter a valid email address.");
                e.preventDefault();
                return;
            }

            // Phone validation
            const phonePattern = /^[0-9]{10}$/;

            if (!phonePattern.test(phone)) {
                alert("Phone number must contain exactly 10 digits.");
                e.preventDefault();
                return;
            }

            // Password length
            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                e.preventDefault();
                return;
            }

            // Confirm password
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                e.preventDefault();
                return;
            }

            // Terms & Conditions
            if (!terms.checked) {
                alert("Please accept the Terms & Conditions.");
                e.preventDefault();
                return;
            }

            alert("Registration Successful!");

        });

    }

});