import { fetchData } from "./main.js"


let loginForm = document.getElementById("loginForm")
if(loginForm) loginForm.addEventListener('submit', login)

function login(e) {
    e.preventDefault()

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value 

    const user = {
        email: email,
        password: password
    }

    fetchData('/user/login', user, 'POST')
    .then(data => {
        if(!data.message) {
            setCurrentUser(data)
            window.location = "item-form.html" 
        }
    })
    .catch(err => {
        console.log(err.message)
    })
}

let registerForm = document.getElementById("registerForm")
if(registerForm) registerForm.addEventListener('submit', register)

function register(e) {
    e.preventDefault()

    const user = {
        full_name: document.getElementById("fullname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        location: document.getElementById("location").value,
        bio: document.getElementById("bio").value
    }

    fetchData('/user/register', user, 'POST')
    .then(data => {
        if(!data.message) {
            setCurrentUser(data)
            window.location = "item-form.html"
        }
    })
    .catch(err => console.log(err.message))
}

async function setCurrentUser(user) {

    await localStorage.setItem('user', JSON.stringify(user))
}

export async function getCurrentUser() {
    return await JSON.parse(localStorage.getItem('user'))
}

export async function logout() {
    localStorage.removeItem('user')
    window.location = "login.html"
}