const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/signup.route')
require('dotenv').config()
const db = process.env.MONGODB_URL
const port = process.env.PORT || 5000
const app = express();
app.use(express.json());
app.use(route)
 

mongoose.connect(db)
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(port, ()=>{console.log(`Server running on ${port}`);})
    })
    .catch((error) => console.log(error))