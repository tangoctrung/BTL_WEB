// const User = require('../model/userModel');
const Code = require('../model/codeModel');
const moment = require('moment');



// ADD CODE FOR CITY,...
const addCode = async (req, res) => {
    try {
        const { code, name, provider, level, codeLength } = req.body;
        // tìm kiếm xem tên tỉnh thành đã được khai báo hay chưa
        const findCode = await Code.findOne({name: name}).populate("provider", ["name", "position"]);
        if (findCode) {
            return res.send({
                status: false, 
                message: name + " đã được khai báo. Bạn không thể khai báo lại.",
                messageDetail: name + " đã được khai báo với mã " + findCode.code + " vào ngày " 
                    + moment(findCode.createdAt).format('DD/MM/YYYY') + " bởi " + findCode.provider.name 
                    + " (" + findCode.provider.position + ")",
            })
        }
        // tìm kiếm xem mã đã được khai báo hay chưa
        const findCode1 = await Code.findOne({ code: code}).populate("provider", ["name", "position"]);
        if (findCode1) {
            return res.send({
                status: false, 
                message: "Mã " + code + " đã được khai báo. Bạn không thể khai báo lại.",
                messageDetail: "Mã " + code + " đã được khai báo cho " + findCode1.name + " vào ngày " 
                    + moment(findCode1.createdAt).format('DD/MM/YYYY') + " bởi " + findCode1.provider.name 
                    + " (" + findCode1.provider.position + ")",
            })
        }

        // kiểm tra xem code có hợp lệ hay không
        if (![2, 4, 6, 8].includes(code.length)) {
            return res.send({
                status: false, 
                message: "Mã " + code + " không hợp lệ. Vui lòng xem lại",
                messageDetail: "Mã này chỉ có thể có độ dài là 2, 4, 6, 8 (2 là mã tỉnh(thành phố)," + 
                     " 4 là mã huyện(quận), 6 là mã xã(phường), 8 là mã thôn(bản, làng, phố))",
            })
        }
        // kiểm tra xem người dùng có đủ thẩm quyền cấp mã không
        if (codeLength !== code.length) {
            // codeLength là độ dài mã mà người dùng được phép cấp
            return res.send({
                status: false, 
                message: "Bạn không đủ thẩm quyền(hoặc không có quyền) cấp mã này.",
                messageDetail: "Với chức vụ của bạn thì bạn chỉ có quyền cấp mã tương ứng có độ dài là " + codeLength,
            })
        }

        // nếu như cả tỉnh thành và mã đều chưa được khai báo và mã hợp lệ thì lưu vào database
        const newCode = new Code({
            code, name, level, provider,
        })
        await newCode.save();
        res.send({
            status: true,
            message: name + " với mã " + code + " đã được khai báo thành công.",
        });
    

    } catch(err) {
        res.status(500).json(err);
    }
}


// GET ALL CODE TRONG NƯỚC VN (lấy mã tỉnh), MỘT TỈNH (lấy mã huyện), hoặc HUYỆN (lẫy mã xã)
const getAllCode = async (req, res) => {
    try {
        const codeId = req.params.id; // id truyền vào là một code của vùng muốn lấy các vùng con trong vùng đấy
        // nếu yêu cầu lấy tất cả các tỉnh đã được khai báo
        if (codeId === "00") {
            const codes = await Code.find({level: "Tỉnh"}).populate("provider", ["name", "position"]);         
            return res.json({
                status: true,
                message: "Lấy dữ liệu thành công",
                data: codes,
            })
            
        }
        // nếu yêu cầu lấy tất cả các huyện trong 1 tỉnh
        if (codeId.length === 2 && codeId !== "00") {
            const codes = await Code.find({level: "Huyện"}).populate("provider", ["name", "position"]);
            const listCode = codes.filter(code => code.code.slice(0, codeId.length) === codeId);
            if (listCode.length > 0) {
                return res.json({
                    status: true,
                    message: "Lấy dữ liệu thành công",
                    data: listCode,
                })
            } else {
                return res.json({
                    status: false, 
                    message: "Không có dữ liệu",
                })
            }
        }
        // nếu yêu cầu lấy tất cả các xã trong 1 huyện
        if (codeId.length === 4 && codeId !== "00") {
            const codes = await Code.find({level: "Xã"}).populate("provider", ["name", "position"]);
            const listCode = codes.filter(code => code.code.slice(0, codeId.length) === codeId);
            if (listCode.length > 0) {
                return res.json({
                    status: true,
                    message: "Lấy dữ liệu thành công",
                    data: listCode,
                })
            } else {
                return res.json({
                    status: false, 
                    message: "Không có dữ liệu",
                })
            }
        }
        // nếu yêu cầu lấy tất cả các thôn trong 1 xã
        if (codeId.length === 6 && codeId !== "00") {
            const codes = await Code.find({level: "Thôn"}).populate("provider", ["name", "position"]);
            const listCode = codes.filter(code => code.code.slice(0, codeId.length) === codeId);
            if (listCode.length > 0) {
                return res.json({
                    status: true,
                    message: "Lấy dữ liệu thành công",
                    data: listCode,
                })
            } else {
                return res.json({
                    status: false, 
                    message: "Không có dữ liệu",
                })
            }
        }
        res.json(codeId);
        
    } catch (err) {
        res.status(500).json(err);
    }
}






module.exports = {
    addCode,
    getAllCode,
}