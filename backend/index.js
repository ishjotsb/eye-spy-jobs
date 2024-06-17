const express = require('express');
const port = 8000;
const app = express();

require('dotenv').config();

const connectDB = require('./config/dbConnection');

connectDB();

//Built-in Middlewares -----
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Router -------
const authenticationRouter = require('./routes/authenticationRouter');
const companyRouter = require('./routes/companyRouter');

app.use('/company', companyRouter);
app.use('/auth', authenticationRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})