const mongoose = require('mongoose');


const CodeSchema = new mongoose.Schema({

    code: {  // mã vùng
        type: String,
        required: true,
        unique: true,
    },
    name: {  // tên vùng
        type: String,
        required: true,
    },
    provider: { // người cấp mã
        ref: 'user',
        type: String,
        required: true,
    },
    level: {  // vùng đó thuộc cấp tỉnh, huyện hay xã, thôn
        type: String,
        required: true,
    },
    namePosition: {  // tên vị trí: ví dụ cán bộ tỉnh hà nội,...
        type: String,
        required: true,
    }


}, { timestamps: true });

module.exports = mongoose.model("code", CodeSchema);