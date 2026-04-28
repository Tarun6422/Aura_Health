// TOGGLE
function showRegister() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "block";
}

function showLogin() {
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}

// REGISTER
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPass").value;

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPass", pass);

    alert("Registration Successful!");
    showLogin();
});

// LOGIN
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPass = localStorage.getItem("userPass");

    if(email === savedEmail && pass === savedPass) {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid Credentials!");
    }
});