const express = require('../fullstakc-API/node_modules/express');
const router = express.Router();


// Route to get all files
router.get('/', (req, res) => {
    res.send('Files route is working');
})

// Route to create a new file

module.exports = router;