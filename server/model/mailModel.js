const mongoose = require('mongoose');

const MailSchema = new mongoose.Schema({

    title: {
        type: String,
        default: '',
    },
    content: {
        type: String,
        default: '',
    },
    receiver: {

    },
    sender: {

    },
    file: [
        {
            type: {type: String, default: ''},
            url: {type: String, default: ''},
        }
    ]
        

}, { timestamps: true });

module.exports = mongoose.model("mail", MailSchema);