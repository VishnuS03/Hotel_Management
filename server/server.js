const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hm',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    connection.query(query, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.json({ success: false, error: err.message });
            return;
        }
        res.json({ success: true });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    connection.query(query, [email, password], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.json({ success: false, error: err.message });
            return;
        }
        if (result.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false, error: 'Invalid credentials' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
