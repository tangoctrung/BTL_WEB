const mongoose = require('mongoose');


const CodeSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    namePosition: {
        type: String,
        required: true,
    }


}, { timestamps: true });

module.exports = mongoose.model("code", CodeSchema);