const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./controllers/user')
const auth = require('./middleware/auth')



mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB is running'))
    .catch(err => console.log(err));

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/users', userController.createUser);
app.put('/users/:id', auth.authenticateUser, userController.updateUser)
app.post('/login', userController.loginUser);




const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
