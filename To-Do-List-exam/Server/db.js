const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
const connection=mongoose.connect(process.env.MONGODB_URL);
