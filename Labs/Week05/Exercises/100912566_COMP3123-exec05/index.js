const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Return home.html page to client
router.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html'); // Serve the home.html file
});

// Return all details from user.json file to client as JSON format
router.get('/profile', (req, res) => {
    const filePath = path.join(__dirname, 'user.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        res.writeHead(200, { "Content-Type": "application/json;charset=utf-8"});
        res.end(data);
    });
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
*/
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    fs.readFile('user.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading user data' });
        }

        const users = JSON.parse(data);
        const user = users.find(u => u.username === username);

        // - If username is invalid then send response as below 
        // {
        //     status: false,
        //     message: "User Name is invalid"
        // }
        if (!user) {
            return res.json({ status: false, message: "User Name is invalid" });
        }

        // - If passsword is invalid then send response as below 
        // {
        //     status: false,
        //     message: "Password is invalid"
        // }
        if (user.password !== password) {
            return res.json({ status: false, message: "Password is invalid" });
        }

        // - If username and  passsword is valid then send resonse as below 
        // {
        //     status: true,
        //     message: "User Is valid"
        // }
        res.json({ status: true, message: "User Is valid" });
    });
});


/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req, res) => {
    const username = req.params.username;
    res.send(`<b>${username} successfully logged out.</b>`);
});


/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server Error');
});


app.use('/', router);

http://localhost:8081
app.listen(process.env.port || 8081, () => {
    console.log('Web Server is listening at port ' + (process.env.port || 8081));
});
