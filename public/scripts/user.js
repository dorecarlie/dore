class User{
    constructor(firstname, lastname, email, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
}

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", register);

function register(event){
    event.preventDefault();
    
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const newUser = new User(firstname, lastname, email, password);

    console.log("register: ", newUser);
}


const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", login);

function login(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("login attempt: ", email, password);
}