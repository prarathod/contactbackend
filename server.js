const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const dbConnecton = require('./config/dbConnecton')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.set('strictQuery', true);

app.use(express.json());
app.use('/api/contacts', require("./routers/contactRouters"));
app.use('/api/users', require("./routers/userRouter"));
app.use(errorHandler);

app.listen(port, ()=> {
    dbConnecton();
    console.log(`Server running on ${port}`);
})