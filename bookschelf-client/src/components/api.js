

async function getBooks() {
    try {
        const res = await fetch("http://localhost:3001/books")
        //console.log(res.json());

        if (res.ok) {
            return res.json();
        }
        else {
            throw Error("Failed fetching Contacts!");
        }
    } catch (error) {
        console.log(error);
    }
}

function currentUser() {
    const cmUser = localStorage.getItem('cm-user')
    if (!cmUser) {
        return null;
    }
    return JSON.parse(cmUser)
}

async function login(email, password) {

    const body = {
        email: email,
        password: password
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        const data = await fetch('http://localhost:3001/login', options)
        if (data.ok) {
            data.json();
            const user = {
                email: email,
                token: data.token
            }
            localStorage.setItem("cm-user", JSON.stringify(user))
            return user;

        } else {
            throw Error("Login failed!")
        }
    } catch (error) {
        console.log(error);

    }
}

function logout() {
    localStorage.removeItem('cm-user')
}


module.exports = {
    getBooks: getBooks,
    login: login,
    currentUser: currentUser,
    logout: logout
}