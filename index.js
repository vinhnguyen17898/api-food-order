const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');
const { json } = require('express/lib/response');


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/restaurantId', (req, res) => {
    let config = {
        method: 'get',
        url: 'https://gappapi.deliverynow.vn/api/delivery/get_from_url?url=ho-chi-minh/com-ba-ghien-nguyen-van-troi',
        headers: {
            'X-FoodyAccessToken': '',
            'X-Foody-Api-Version': '1',
            'X-Foody-App-Type': '1004',
            'X-Foody-Client-Id': '',
            'X-Foody-Client-Language': 'vi',
            'X-Foody-Client-Type': '1',
            'X-Foody-Client-Version': '3.0.0',
            'X-Sap-Ri': 'ef6c216559a26b6011140d38562609a2f46c5111f0762022',

        }
    };

    axios.request(config)
        .then((response) => {
            console.log(1321313);
            res.status(200).json(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
});

const port = 8080;

app.listen(process.env.PORT || port, () => {
    console.log(`Server is listening on port ${port}`);
});