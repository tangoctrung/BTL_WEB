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
        ref: "user",
        type: String,
    },
    totalWatch: [
        {
            type: String,
            ref: 'user',
        }
    ],
   
}, { timestamps: true });

module.exports = mongoose.model("post", PostSchema);