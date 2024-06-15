const express = require('../fullstakc-API/node_modules/express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Profile route is working');
});

module.exports = router;