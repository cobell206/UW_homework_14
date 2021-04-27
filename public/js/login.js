
const loginFormHandler = async (event) => {
    event.preventDefault()

    const email = document.querySelector('#emailInput').value.trim()
    const password = document.querySelector('#passwordInput').value.trim()

    if (email && password) {
        
        // Fetch POST to login
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'}
        })

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
}

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler)