const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

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
    phone: {
        type: String,
        required: true,
    },
    position: { // vị trí, chức vụ
        type: String,
        default: 'citizen',
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
        default: "",
    },
    avatar: {
        type: String,
        required: false,
        default: "",
    },
    nickname: {
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
    status: {
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
    infoOther: {
        type: String,
        required: false,
        default: "",
    }

}, { timestamps: true });

module.exports = mongoose.model("user", UserSchema);