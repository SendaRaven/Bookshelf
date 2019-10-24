

function getBooks() {
    try {
        fetch("http://localhost:3001/books")
            .then(res => res.json())
            .then(res1 => {return res1}                
            )
    } catch (error) {
        console.log(error);

    }
}


module.exports = {
    getBooks: getBooks,
}