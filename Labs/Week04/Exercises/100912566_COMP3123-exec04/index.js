const express = require('express');
const app = express();
const SERVER_PORT = process.env.PORT || 3000;

app.use(express.json())

// http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World');
})

// http://localhost:3000/
app.post('/', (req, res) => {
    res.send('POST - Hello World');
})


// A GET request to /hello that returns "Hello Express JS".
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
})

// A GET request to /user with query parameters for firstname and lastname.
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.json({ firstname, lastname });
});

// A POST request to /user with path parameters for firstname and lastname.
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});



// Listen to the server
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
})