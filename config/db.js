const mongoose = require('mongoose');
const config = require('config');

const mongoDbConnection = config.get("MONGO_URI");

// Set up connection to database using Async and Await
const connectMongoDb = async () => {

    try {

        await mongoose.connect(mongoDbConnection);
        console.log(' ------------ Database Connection Successfull!!! ---------------');

    } catch (error) {
        console.log(error);
// If failure to connect - exit out.
        process.exit(1);
    }
}


module.exports = connectMongoDb;