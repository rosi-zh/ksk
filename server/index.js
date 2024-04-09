const express = require('express');

const cors = require('./middleware/corsMiddleware')

const app = express();
const port = 3030;

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