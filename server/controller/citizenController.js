const Citizen = require('../model/citizenModel');
const Census = require('../model/censusModel');
const Code = require('../model/codeModel');
const validator = require('validator');
const moment = require('moment');


// khai báo thông tin của một người dân
const AddCitizen = async (req, res) => {
    const { name, numCCCD, education, nation, religion,
        phone, email, avatar, date, job, addressCity, addressDistrict, addressWard, addressVillage,
        hometownCity, hometownDistrict, hometownWard, gender, infoDetail, infoFamily, hometownVillage,
        codeArea, //mã của vùng mở cuộc điều tra dân số
        timeAdd, // thời gian lúc thêm citizen
        typeAccount, // loại tải khoản của người chỉnh sửa
    } = req.body;

    try {
        // kiểm tra xem còn trong thời gian khai báo dân số không
        if (typeAccount !== "A1") {
            const code = await Code.findOne({code: codeArea});
            if (!code) {
                return res.json({
                    status: false,
                    message: "Địa phương này không tồn tại.",
                })
            } else {
    
                if (!code.statusCensus) {
                    return res.json({
                        status: false,
                        message: "Cuộc khảo sát dân số chưa được mở.",
                    })
                }

                if (moment(timeAdd).format("YYYY-MM-DD") < moment(code.timeOpen).format("YYYY-MM-DD")) {
                    return res.json({
                        status: false,
                        message: "Cuộc khảo sát dân số chưa được mở.",
                    })
                }
    
                if (moment(timeAdd).format("YYYY-MM-DD") > moment(code.timeClose).format("YYYY-MM-DD")) {
                    return res.json({
                        status: false,
                        message: "Đã quá hạn thời gian khảo sát dân số, bạn không thể chỉnh sửa gì được nữa.",
                    })
                }
            }
        }

        // kiểm tra xem thông tin về tên có dài quá không
        if (name.length > 30 ) {
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
        if (email !=="") {
            if (!validator.isEmail(email))
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
            name, numCCCD, education, nation, religion,
            phone, email: email ? email : "", avatar, date, job, addressCity, addressDistrict, addressWard, addressVillage,
            hometownCity, hometownDistrict, hometownWard, hometownVillage, gender, infoDetail, infoFamily,
        });
        await newCitizen.save();

        res.json({status: true, message: "Công dân đã được lưu thành công"});
    } catch (err) {
        res.status(500).json(err);
    }
}

// cập nhật thông tin cho 1 công dân có numCCCD
const UpdateCitizen = async (req, res) => {
    const userId = req.params.id;
    const { 
         _id, createdAt, updatedAt,
         name, education, nation, religion, phone, email, avatar, date, job, gender,
         numCCCD, infoDetail, infoFamily, hometownCity, hometownDistrict, hometownWard, hometownVillage, addressCity, addressDistrict, addressWard, addressVillage,
        codeArea, //mã của vùng mở cuộc điều tra dân số
        timeAdd, // thời gian lúc thêm citizen
        typeAccount,
    } = req.body;
    const data = {
        name, education, nation, religion, phone, email, avatar, date, job, gender,
        numCCCD, infoDetail, infoFamily, hometownCity, hometownDistrict, hometownWard, hometownVillage, addressCity, addressDistrict, addressWard, addressVillage,
    }
    console.log(data);
    // kiểm tra xem còn trong thời gian khai báo dân số không
    if (typeAccount !== "A1") {
        const code = await Code.findOne({code: codeArea});
        if (!code) {
            return res.json({
                status: false,
                message: "Địa phương này không tồn tại.",
            })
        } else {

            if (!code.statusCensus) {
                return res.json({
                    status: false,
                    message: "Cuộc khảo sát dân số chưa được mở.",
                })
            }

            if (moment(timeAdd).format("YYYY-MM-DD") < moment(code.timeOpen).format("YYYY-MM-DD")) {
                return res.json({
                    status: false,
                    message: "Cuộc khảo sát dân số chưa được mở.",
                })
            }

            if (moment(timeAdd).format("YYYY-MM-DD") > moment(code.timeClose).format("YYYY-MM-DD")) {
                return res.json({
                    status: false,
                    message: "Đã quá hạn thời gian khảo sát dân số, bạn không thể chỉnh sửa gì được nữa.",
                })
            }
        }
    }

    try {
        const citizenNew = await Citizen.findByIdAndUpdate({_id: userId}, data, {new: true});
        res.json({
            status: true, 
            message: "Dữ liệu của công dân này đã được cập nhật thành công.",
            data: citizenNew,
        })
    } catch (err) {
        res.status(500).json(err);
    }
}

// xóa thông tin của công dân có số CCCD
const DeleteCitizen = async (req, res) => {
    const userId = req.params.id;
    // const { codeArea, //mã của vùng mở cuộc điều tra dân số
    //     timeAdd, // thời gian lúc thêm citizen
    //     typeAccount,
    // } = req.body;
    // // kiểm tra xem còn trong thời gian khai báo dân số không
    // if (typeAccount !== "A1") {
    //     const code = await Code.findOne({code: codeArea});
    //     if (!code) {
    //         return res.json({
    //             status: false,
    //             message: "Địa phương này không tồn tại.",
    //         })
    //     } else {

    //         if (!code.statusCensus) {
    //             return res.json({
    //                 status: false,
    //                 message: "Cuộc khảo sát dân số chưa được mở.",
    //             })
    //         }

    //         if (moment(timeAdd).format("YYYY-MM-DD") < moment(code.timeOpen).format("YYYY-MM-DD")) {
    //             return res.json({
    //                 status: false,
    //                 message: "Cuộc khảo sát dân số chưa được mở.",
    //             })
    //         }

    //         if (moment(timeAdd).format("YYYY-MM-DD") > moment(code.timeClose).format("YYYY-MM-DD")) {
    //             return res.json({
    //                 status: false,
    //                 message: "Đã quá hạn thời gian khảo sát dân số, bạn không thể chỉnh sửa gì được nữa.",
    //             })
    //         }
    //     }
    // }
    try {
        await Citizen.findByIdAndDelete({_id: userId});
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

// lấy tất cả công dân theo một vùng quê quán có code nào đó
const getAllCitizenCode = async (req, res) => {
    const codeName = req.query.codeName;
    const level = req.query.level;
    // console.log(codeName, level);
    // console.log(req.accountName, req.typeAccount);
    // kiểm tra xem người dùng có thể lấy dữ liệu từ codeName này không
    try {
        let citizens = null;
        if (level === "Tỉnh") {
            citizens = await Citizen.find({"hometownCity": codeName});
        } else if (level === "Huyện") {
            citizens = await Citizen.find({"hometownDistrict": codeName});
        } else if (level === "Xã") {
            citizens = await Citizen.find({"hometownWard": codeName});
        } else if (level === "Thôn") {
            citizens = await Citizen.find({"hometownVillage": codeName});
        } 
        
        if (!citizens.length > 0) {
            return res.json({
                status: false,
                message: "Không tìm thấy dữ liệu",
                citizens: [],
            })
        }
        
        res.json({
            status: true, 
            message: "Lấy dữ liệu của tất cả công dân thành công.",
            citizens,
        })

    } catch (err) {
        res.status(500).json(err);
    }
}

// lấy thông tin của 1 công dân với số CCCD
const getCitizenNumCCCD = async (req, res) => {
    let numCCCD = req.query.numCCCD;

    try {
        // nếu tìm kiếm theo numCCCD citizen
        if (numCCCD) {
            const citizen = await Citizen.findOne({numCCCD: numCCCD});
            if (citizen) {
                return res.json({
                    status: true, 
                    message: "Lấy dữ liệu của tất cả công dân thành công.",
                    data: [citizen],
                })
            }
            return res.json({
                status: false, 
                message: "Không tìm thấy dữ liệu.",
                data: [],
            });
        }

    } catch (err) {
        res.status(500).json(err);
    }
}

// lấy thông tin của 1 công dân với userId
const getCitizenId = async (req, res) => {
    const citizenId = req.params.id;

    try {
        // nếu tìm kiếm theo id của citizen
        const citizen = await Citizen.findById({_id: citizenId});
        return res.json({
            status: true,
            message: "Lấy dữ liệu thành công",
            data: citizen,
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
    getCitizenNumCCCD,
    getCitizenId,
}