const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ "message": "hello world" });
});

const port = 8080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});