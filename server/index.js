const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const  userRoute = require('./routes/userRoute')

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

app.use("/api/v1", userRoute)

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.Mongo_URL;

mongoose.connect(MONGOURL)
.then(() => {
    console.log("DB connected successfully.")
    app.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}`);
    })
})
.catch(err => { console.log(err) });