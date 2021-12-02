const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    title: {
        type: String,
        default: '',
    },
    content: {
        type: String,
        default: '',
    },
    author: {
        ref: "cadres",
        type: String,
    },
    totalWatch: [
        {
            type: String,
            ref: 'user',
        }
    ],
    city: {
        type: String,
    }

}, { timestamps: true });

module.exports = mongoose.model("post", PostSchema);