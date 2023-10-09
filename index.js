const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    console.log(13);
    res.json({ "message": "hello world" });
});

const port = 8080;

app.listen(process.env.PORT || port, () => {
    console.log(`Server is listening on port ${port}`);
});