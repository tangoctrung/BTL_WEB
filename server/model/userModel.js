const mongoose = require('mongoose');

// khai báo thông tin cho người dùng hệ thống

const UserSchema = new mongoose.Schema({

    // lastName: { // họ
    //     type: String,
    // },
    // firstName: { // tên thật
    //     type: String,
    // },
    // bufferName: { // tên đệm
    //     type: String,
    // },
    name: { // họ và tên
        type: String,
        default: "Chưa có thông tin",
    },
    numCCCD: {
        type: String,
        unique: true,
        default: "Chưa có thông tin",
    },
    phone: {
        type: String,
        default: "Chưa có thông tin",
    },
    position: { // vị trí, chức vụ
        type: String,
        // required: true,
        default: "",
    },
    typeAccount:{
        type: String,
        required: true,
    },
    accountName: { // tên tài khoản 
        type: String,
        required: true,
        unique: true,
        default: "",
    },
    password: {
        type: String,
        required: true,
    },
    providerAccount: {
        type: String,
        required: true,
        ref: 'user',
    },
    refreshToken: {
        type: String,
        default: "",
    },
    avatar: {
        type: String,
        required: false,
        default: "https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png",
    },
    nickname: {
        type: String,
        required: false,
        default: "",
    },
    date: {
        type: Date,
        required: false,
        default: "Chưa có thông tin",
    },
    job: {
        type: String,
        required: false,
        default: "Chưa có thông tin",
    },
    address: {
        type: String,
        required: false,
        default: "Chưa có thông tin",
    },
    hometown: {
        type: String,
        required: false,
        default: "Chưa có thông tin",
    },
    gender: {
        type: String,
        required: false,
        default: "Chưa có thông tin",
    },
    infoOther: {
        type: String,
        required: false,
        default: "Chưa có thông tin",
    },

}, { timestamps: true });

module.exports = mongoose.model("user", UserSchema);