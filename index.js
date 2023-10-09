const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    let config = {
        method: 'get',
        url: 'https://gappapi.deliverynow.vn/api/delivery/get_from_url?url=ho-chi-minh/com-ba-ghien-nguyen-van-troi',
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            'X-FoodyAccessToken': '',
            'X-Foody-Api-Version': '1',
            'X-Foody-App-Type': '1004',
            'X-Foody-Client-Id': '',
            'X-Foody-Client-Language': 'vi',
            'X-Foody-Client-Type': '1',
            'X-Foody-Client-Version': '3.0.0',
            'X-Sap-Ri': 'ef6c216559a26b6011140d38562609a2f46c5111f0762022'
        }
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    console.log(13);
    res.json({ "message": "hello world" });
});

const port = 8080;

app.listen(process.env.PORT || port, () => {
    console.log(`Server is listening on port ${port}`);
});