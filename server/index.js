const express = require('express');
const result = require('dotenv').config();

const { cors } = require('./middlewares/corsMiddleware');
const { auth } = require('./middlewares/authMiddleware');
const { dbConnect } = require('./config/databaseConfig');

const app = express();
const port = process.env.PORT;

dbConnect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middlewares
app.use(cors);
// Uncoment to JWT auth
// app.use(auth);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})