const express = require('express');
const db = require('./queries.js');

const app = express();

const port = process.env.port || 5000

app.get('/', (req, res) => {
    res.send('Server is ready');
});
app.get('/users', db.getUsers);

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});