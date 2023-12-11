function register() {
    let regname=document.getElementById("regname").value;
    let regpass=document.getElementById("regpass").value;

    if (regname=="") {
        alert("Username should not be empty!");
    } else if (localStorage.getItem("users") && JSON.parse(localStorage.getItem("users")).some((user) => user.name === regname)) {
        alert("Username already exists");
    } else if (regpass=="") {
        alert("Password should not be empty!");
    } else {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ name: regname, password: regpass });
        localStorage.setItem("users", JSON.stringify(users));

        login(regname, regpass)
    }
}

function loginSubmit() {
    let loginname=document.getElementById("loginname").value;
    let loginpass=document.getElementById("loginpass").value;

    if (loginname =="" || loginpass =="") {
        alert("Username and password are required!");
    } else {
        login(loginname, loginpass);
    }

}
function login(username, password) {

    if ((JSON.parse(localStorage.getItem("users")).some((z) => z.name == username)) && (JSON.parse(localStorage.getItem("users")).some((y) => y.password == password))) {
        window.location.href = "home.html";
        
    } else {
        alert("Enter correct username and password.")
        document.getElementById("loginname").value=""
        document.getElementById("loginpass").value=""
    }
    localStorage.setItem("username1",username)
    localStorage.setItem("password1",password)
}


function logout() {
    window.location.href = "loginproject.html"
}
function create() {
    window.location.href = "registerproject.html"
}
function cancel() {
    window.location.href = "loginproject.html"
}

function greetings(user1, pass1) {
    document.getElementById("name").innerText = "Hi, " + user1
    document.getElementById("pass").innerText="and your password is "+pass1
}