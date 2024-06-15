const mongoose = require('../fullstakc-API/node_modules/mongoose');

const fileSchema = new mongoose.Schema({
    name: String,
    type: String,
    size: String,
    author: String,
    lastmod: String,
    files: [String]
});

const File = mongoose.model('File', fileSchema);

module.exports = File;