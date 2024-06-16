const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Connected to Mongo DB!');
    }
    catch(err) {
        console.log('Some error occurred', err);
    }
}

module.exports = connectDB;