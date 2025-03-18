console.log("🚀 index.js loaded successfully!");

document.querySelector(".btn").addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form from refreshing page

    const username = document.getElementById("username")?.value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("passs").value;

    const response = await fetch("http://localhost:5001/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();
    alert(data.message); // Show response message
});

document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".popup-button");
    const loginPopup = document.querySelector(".wrapper");
    const closeBtn = document.querySelector(".close");
    const registerLink = document.querySelector(".signup-link"); // Register button inside login
    const loginLink = document.querySelector(".login-link"); // Login button inside register

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            console.log("🔹 Login button clicked!");
            loginPopup.classList.add("active-popup"); 
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            console.log("🔹 Close button clicked!");
            loginPopup.classList.remove("active-popup"); 
        });
    }

    // 🔥 Fix Register Form Not Switching
    if (registerLink) {
        registerLink.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("🔹 Register link clicked!");
            loginPopup.classList.add("active");
        });
    }

    // 🔥 Fix Login Form Not Switching
    if (loginLink) {
        loginLink.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("🔹 Login link clicked!");
            loginPopup.classList.remove("active");
        });
    }
});



