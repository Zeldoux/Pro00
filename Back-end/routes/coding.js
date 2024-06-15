const express = require('../fullstakc-API/node_modules/express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Coding route is working');
});

module.exports = router;