

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
            let result = await data.json();
            const user = {
                email: email,
                token: result.token
            }
            localStorage.setItem("cm-user", JSON.stringify(user))
            return user;

        } else {
            let result = await data.json();
            console.log("result Errormessage", result);
            return result;
            //throw Error("Login failed!")
        }
    } catch (error) {
        console.log(error);

    }
}

async function signup(name, email, password) {

    const body = {
        username: name,
        email: email,
        password: password
    }
    //console.log("Body", body);

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        const data = await fetch('http://localhost:3001/signup', options)
        console.log("recived Data", data);

        if (data.ok) {
            let result = await data.json();
            const user = {
                username: result.username,
                email: result.contact.email,
            }
            console.log("User", user);

            return user;

        } else {
            let result = await data.json();
            console.log("result Errormessage", result);
            return result;
            //throw Error(result);
        }

    } catch (error) {
        console.log("Other Error", error);
        return error;
    }
}

function logout() {
    localStorage.removeItem('cm-user')
}

async function bookSearch(keyword) {

    const body = {
        keyword: keyword
    }
    //console.log("Body", body);

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        const data = await fetch('http://localhost:3001/Bookshelf', options)
        if (data.ok) {
            return await data.json();
        }
    } catch (error) {
console.log(error);

    }
}


module.exports = {
    getBooks: getBooks,
    login: login,
    currentUser: currentUser,
    logout: logout,
    signup: signup,
    bookSearch,

}