const express = require('express');
const connection = require('./db');
const ToDoRoutes = require('./routes/ToDo.Route');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true

}));
app.use(express.json());
app.use('/', ToDoRoutes)
app.listen(process.env.PORT, () => {
    try {
        connection
        console.log("Server is running on port 8080");
    }
    catch (err) {
        console.log(err?.message);
    }
})