const express = require("express");
const router = express.Router();
const axios = require('axios');
const { json } = require('express/lib/response');

router.get("/", async (req, res, next) => {
    console.log("da vao");
    console.log();
    const getRestaurantDetail = async () =>{
        let config = {
            method: 'get',
            url: 'https://gappapi.deliverynow.vn/api/delivery/get_from_url?url=' + req.query.restaurantName,
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
        const response = await axios.request(config);
        return response.data;
    }
    var data = await getRestaurantDetail();
    return res.status(200).json(data);
});

module.exports = router;