const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./db');
const booksRoute = require('./routes/books.js');
const authRoute = require('./routes/auth');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
app.use("/api/books", booksRoute);
app.use("/api/user", authRoute)

app.get("/", (req, res) => {
    res.status(200).send("Hello from nodejs");
})

app.listen(5000, () => {
    console.log("Connected to Server...");
});