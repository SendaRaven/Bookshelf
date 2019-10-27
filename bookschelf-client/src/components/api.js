

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


module.exports = {
    getBooks: getBooks,
}