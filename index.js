const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const { json } = require('express/lib/response');
const restaurant = require("./routes/restaurant");


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/',  async (req, res) => {
    return res.status(200).json("Hello");
});

app.use("/restaurantDetail", restaurant);

const port = 8080;

app.listen(process.env.PORT || port, () => {
    console.log(`Server is listening on port ${port}`);
});