const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const db = require("./models");
db.sequelize.sync();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.post('/api/registerNot', function(req, res) {
    const { email, password } = req.body;
    const user = new User({ email, password });
    user.save(function(err) {
      if (err) {
        res.status(500)
          .send("Error registering new user please try again.");
      } else {
        res.status(200).send("Welcome to the club!");
      }
    });
  });

//Routes Middleware
//app.get('/users', db.getUsers);
//app.get('/users/:id', db.getUserById)
//app.post('/signUp', db.signUp)

const port = process.env.port || 5000
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

//Luis Probando el git push