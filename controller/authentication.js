const axios = require("axios");
const { WORDPRESS_API_URL } = require("../keys");

exports.authenticate = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    axios.post(`${WORDPRESS_API_URL}/wp-json/jwt-auth/v1/token`, {
        username, password,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        const { displayName, id, email, firstName, lastName, token } = response.data.data;
        const userDetails = { token, displayName, id, email, firstName, lastName };
        res.status(201).send(userDetails);
        console.log(userDetails);
    }).catch((error) => {
        res.status(401).send({ error: error })
    })
}