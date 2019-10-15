const faker = require("faker/locale/de");
const book = require("./models/bookSchema");
const user = require("./models/userSchema");


const mongoose = require("mongoose");

mongoose.connect(
    'mongodb://127.0.0.1:27017/bookshelf', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on("error", function () {
    process.exit(1);
})
db.once("open", function () {
    console.log("Inserting data...");
    seed();
})

function seed() {
    let rawBooks = [];
    for (let i = 0; i < 100; i++) {
        let rawBook = {
            information: {
                title: faker.company.catchPhrase(),
                author: {
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName()
                },
                publication: faker.date.past(200),
                summary: faker.lorem.paragraph()
            },
            category: faker.commerce.department(),
            status: "available"
        }
        rawBooks.push(rawBook)
    };
    let rawUsers = [];
    for (let i = 0; i < 20; i++) {
        let rawUser = {

            username: faker.internet.userName(),
            password: faker.internet.password(),

            contact: {
                name: {
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName()
                },
                birthday: faker.date.past(90),
                address: {
                    street: {
                        name: faker.address.streetName(),
                        number: faker.random.number(60)
                    },
                    city: faker.address.city(),
                    zipCode: faker.address.zipCode()
                },
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber()
            },
            borrowedBooks: [],
            openFees: [],
        };
        rawUsers.push(rawUser);


    };

    user.insertMany(rawUsers, function (error, docs) {
        console.log("User:", error);
        console.log(`${docs.length} docs(Users) inserted!`);
        console.log(docs[0]);
        //process.exit(0); //if uncommented it will stop the data insertion here 
    })
    book.insertMany(rawBooks, function (error, docs) {
        console.log("Book:", error);
        console.log(`${docs.length} docs(Books) inserted!`);
        console.log(docs[0]);
        process.exit(0);
    })


}