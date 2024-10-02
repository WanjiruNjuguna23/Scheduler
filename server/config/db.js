const mongoose = require('mongoose');
//require('dontev').config();
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            userNewUrlParser: true,
            userUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;