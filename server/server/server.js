const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
require('dotenv').config();

const app = express();
app.use(express.json()); 


mongoose.connect(process.env.MONGO_URI,{
    userNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('Database Connection error:', error));


//Routes
app.use('/tasks', taskRoutes);
app.use('/schedule', scheduleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
