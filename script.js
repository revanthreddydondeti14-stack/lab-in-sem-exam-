
function register() {
    let user = document.getElementById("regUsername").value.trim();
    let pass = document.getElementById("regPassword").value;

    if (user === "" || pass === "") {
        alert("Please enter username and password");
        return;
    }

    let account = {
        username: user,
        password: pass
    };

    localStorage.setItem("user", JSON.stringify(account));

    alert("Registration successful!");

    document.getElementById("regUsername").value = "";
    document.getElementById("regPassword").value = "";
}

function login() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value;

    let savedUser = localStorage.getItem("user");
    let account = savedUser ? JSON.parse(savedUser) : null;

    if (account &&
        user === account.username &&
        pass === account.password) {

        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("currentUser", user);

        showDashboard();

    } else {
        document.getElementById("message").innerText =
            "Invalid username or password!";
    }
}

function showDashboard() {
    document.getElementById("loginPage").hidden = true;
    document.getElementById("dashboard").hidden = false;

    document.getElementById("welcomeUser").innerText =
        sessionStorage.getItem("currentUser");
}

function logout() {
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("currentUser");

    document.getElementById("dashboard").hidden = true;
    document.getElementById("loginPage").hidden = false;

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("message").innerText = "";
}

window.onload = function () {
    if (sessionStorage.getItem("loggedIn") === "true") {
        showDashboard();
    }
};
