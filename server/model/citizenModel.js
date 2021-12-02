const mongoose = require('mongoose');

// khai báo thông tin cho công dân thu thập được

const CitizenSchema = new mongoose.Schema({

    lastName: { // họ
        type: String,
        required: true,
    },
    firstName: { // tên
        type: String,
        required: true,
    },
    bufferName: { // tên đệm
        type: String,
        required: true,
    },
    numCCCD: {
        type: String,
        required: true,
        unique: true,
    },
    education: {
        type: String,
        required: false,
        default: "",
    },
    nation: {
        type: String,
        required: false,
        default: "",
    },
    religion: {
        type: String,
        required: false,
        default: "",
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        required: false,
        default: "",
    },
    date: {
        type: Date,
        required: false,
    },
    job: {
        type: String,
        required: false,
        default: "",
    },
    address: {
        city: {
            type: String,
            required: false,
            default: "",
        },
        district: {
            type: String,
            required: false,
            default: "",
        },
        ward: {
            type: String,
            required: false,
            default: "",
        }
    },
    hometown: {
        city: {
            type: String,
            required: false,
            default: "",
        },
        district: {
            type: String,
            required: false,
            default: "",
        },
        ward: {
            type: String,
            required: false,
            default: "",
        }
    },
    gender: {
        type: String,
        required: false,
        default: "",
    },
    infoDetail: {
        type: String,
        required: false,
        default: "",
    },
    infoFamily: {
        type: String,
        required: false,
        default: "",
    }

}, { timestamps: true });

module.exports = mongoose.model("citizen", CitizenSchema);