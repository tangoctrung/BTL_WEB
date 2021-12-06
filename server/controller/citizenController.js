const Citizen = require('../model/citizenModel');
const validator = require('validator');


// khai báo thông tin của một người dân
const AddCitizen = async (req, res) => {
    const { lastName, firstName, bufferName, numCCCD, education, nation, religion,
        phone, email, avatar, date, job, address, hometown, gender, infoDetail, infoFamily,
    } = req.body;

    try {
        // kiểm tra thông tin nhập có hợp lệ không 

        // kiểm tra xem thông tin về tên có dài quá không
        if (lastName.length > 15 || firstName.length > 15 || bufferName.length > 30 ) {
            return res.json({
                status: false,
                message: "Thông tin về tên của công dân không hợp lệ"
            })
        }
        // kiểm tra xem số CCCD đã tồn tại hay chưa
        const citizen = await Citizen.findOne({numCCCD: numCCCD});
        if (citizen ) {
            // đã tồn tại số CCCD 
            return res.json({
                status: false,
                message: "Số CCCD của công dân này đã tồn tại, hoặc bị sai, vui lòng kiểm tra lại.",
            })
        }
        // kiểm tra xem địa chỉ email hợp lệ không
        if (!validator.isEmail(email)) {
            return res.json({
                status: false,
                message: "Địa chỉ email của công dân không hợp lệ, vui lòng kiểm tra lại.",
            })
        }
        // kiểm tra xem ngày sinh có hợp lệ không
        if (date > Date.now()) {
            return res.json({
                status: false,
                message: "Ngày sinh của công dân không hợp lệ, vui lòng xem lại.",
            })
        }


        // nếu tất cả thông tin hợp lệ thì lưu citizen vào database
        const newCitizen = new Citizen({
            lastName, firstName, bufferName, numCCCD, education, nation, religion,
            phone, email, avatar, date, job, address, hometown, gender, infoDetail, infoFamily,
        });
        await newCitizen.save();

        res.json({status: true, message: "Công dân đã được lưu thành công"});
    } catch (err) {
        res.status(500).json(err);
    }
}

// cập nhật thông tin cho 1 công dân có numCCCD
const UpdateCitizen = async (req, res) => {
    const numCCCD = req.query.numCCCD;
    try {
        await Citizen.findOneAndUpdate({numCCCD}, req.body);
        res.json({
            status: true, 
            message: "Dữ liệu của công dân này đã được cập nhật thành công."
        })
    } catch (err) {
        res.status(500).json(err);
    }
}

// xóa thông tin của công dân có số CCCD
const DeleteCitizen = async (req, res) => {
    const numCCCD = req.query.numCCCD;
    try {
        await Citizen.findOneAndDelete({numCCCD});
        res.json({
            status: true, 
            message: "Dữ liệu của công dân này đã bị xóa."
        })

    } catch (err) {
        res.status(500).json(err);
    }
}

// lấy tất cả thông tin của tất cả công dân
const getAllCitizen = async (req, res) => {
    try {
        const citizens = await Citizen.find();
        res.json({
            status: true, 
            message: "Lấy dữ liệu của tất cả công dân thành công.",
            citizens,
        })

    } catch (err) {
        res.status(500).json(err);
    }
}

// lấy tất cả công dân theo một vùng có code nào đó
const getAllCitizenCode = async (req, res) => {
    const code = req.query.code;
    try {
        const citizens = await Citizen.find();
        res.json({
            status: true, 
            message: "Lấy dữ liệu của tất cả công dân thành công.",
            citizens,
        })

    } catch (err) {
        res.status(500).json(err);
    }
}

// lấy thông tin của 1 công dân với điều kiện nào đó
const getAllCitizenConditions = async (req, res) => {
    try {
        const citizens = await Citizen.find();
        res.json({
            status: true, 
            message: "Lấy dữ liệu của tất cả công dân thành công.",
            citizens,
        })

    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports = {
    AddCitizen,
    UpdateCitizen,
    DeleteCitizen,
    getAllCitizen,
    getAllCitizenCode,
}