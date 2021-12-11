const User = require('../model/userModel');
const Code = require('../model/codeModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var moment = require('moment');



// CREATE A USER / REGISTER
const registerUser = async (req, res) => {

    try {
        // const {accountName, password, typeAccount, providerAccount} = req.body;

        // kiểm tra xem tên tài khoản đã tồn tại hay chưa
        const user1 = await User.findOne({accountName: req.body.accountName});
        if (user1) 
            return res.json({
                success: false, 
                message: "Tên tài khoản này đã được cấp, bạn không thể cấp lại.",
                messageDetail: `Tài khoản này được cấp vào ngày ${moment(user1.createdAt).format("DD-MM-YYYY")} bởi ${user1.providerAccount.name} (${user1.position})`,

            });

        // kiểm tra xem password có hợp lệ hay không
        if (req.body.password.length < 8) 
            return res.json({
                success: false, 
                message: "Password phải từ 8 kí tự.",
                messageDetail: `Mật khẩu của bạn mới có ${req.body.password.length} ký tự. Chúng tôi cần bạn chọn mật khẩu có từ 8 ký tự trở lên để đảm bảo tính bảo mật.`
            });

        // mã hóa password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        let position = "Anonymos";
        // if (req.body.typeAccount == "A1"){
        //     position = "Tổng cục Dân số thuộc Bộ Y tế ";
        // }

        if (req.body.typeAccount !== "A1") {
            const code = await Code.findOne({code: req.body.accountName});
            
            // nếu thành phố có mã gióng tk chưa được khai báo thì báo lỗi
            if (!code) {
                return res.json({
                    success: false, 
                    message: "Tên tài khoản không hợp lệ.",
                    messageDetail: "Có thể vùng nào đó có mã như tên tài khoản chưa được khai báo, bạn cần khai báo mã cho vùng đó trước."
                })
            }
            // xác định chức vụ, vị trí của tài khoản từ accountname
            switch (req.body.typeAccount) {
                case "A2":
                    position = "Chi cục dân số thuộc Sở Y tế "  + code.name;
                    break;
                case "A3":
                    position = "Công chức thực hiện công tác dân số tại Phòng Y tế "  + code.name;
                    break;
                case "B1":
                    position = "Viên chức dân số thuộc Trạm Y tế "  + code.name;
                    break;
                case "B2":
                    position = "Cộng tác viên dân số tại "  + code.name;
                    break;
    
                default:
                    position = "";
                    break;
            }
        } else if (req.body.typeAccount == "A1"){
            position = "Tổng cục Dân số thuộc Bộ Y tế";
        }

        
        
        const newUser = new User({
            accountName: req.body.accountName, 
            typeAccount: req.body.typeAccount, 
            providerAccount: req.body.providerAccount,
            position: position,
            password: hashedPass,
            // password: req.body.password,
        });
        await newUser.save();
        // res.json(user);
        
        res.status(200).json({status: true, message: "Tài khoản được thêm thành công!"});

    } catch (error) {
        res.status(500).json(error);
    }
}


// LOGIN
const loginUser = async (req, res) => {
    // const { email, password, position } = req.body;
    try {
        const newUser = await User.findOne({accountName: req.body.email});
        if (!newUser) return res.json({status: false, message: 'Sai email hoặc mật khẩu.'});  

        if (newUser.isAdmin) {
            const token = jwt.sign({_id: newUser._id}, process.env.ACCESS_TOKEN_SECRET);

            return res.status(200).json({status: true, newUser, token});
        }
            
        const validate = await bcrypt.compare(req.body.password, newUser.password);
        if (!validate) return res.json({status: false, message: 'Sai email hoặc mật khẩu.'});          
        // tạo token
        const token = jwt.sign({_id: newUser._id, position: newUser.position}, process.env.ACCESS_TOKEN_SECRET);

        res.status(200).json({status: true, newUser, token});

    } catch (error) {
        res.status(500).json(error);
    }
}


// GET USER
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        res.status(200).json({status: true, user});
    } catch (error) {
        res.status(500).json(error);
    }
}

// GET ALL USER
const getAllUser = async (req, res) => {
    try {
        const users = await User.find({typeAccount: {"$ne": "admin"}}).select('-password').populate("providerAccount", [
            "name","typeAccount", "accountName", 
        ]);
        res.status(200).json({status: true, users});
    } catch (error) {
        res.status(500).json(error);
    }
}

// lấy tất cả user mà bạn đã cấp
const getAllUserIsProvied = async (req, res) => {
    const userId = req.params.id;
    try {
        const users = await User.find({providerAccount: userId}).select('-password').populate("providerAccount", [
            "name","typeAccount", "accountName", 
        ]);
        res.status(200).json({status: true, users});
    } catch (error) {
        res.status(500).json(error);
    }
}


// UPDATE A USER
const updateUser = async (req, res) => {
    const { name, phone, avatar, date, nation, religion, gender, address,
    hometown, infoOther } = req.body;
    const userId = req.params.id;
    try {
        const user = await User.findByIdAndUpdate({_id: userId},
            { 
                name, phone, avatar, date, nation, religion, gender, address,
                hometown, infoOther 
            }, {new: true});
        res.status(200).json({
            status: true,
            message: "Cập nhật dữ liệu thành công.",
            data: user,
        })

    } catch (err) {
        res.status(500).json({err});
    }
}


module.exports = {
    registerUser,
    loginUser,
    getUser,
    getAllUser,
    updateUser,
    getAllUserIsProvied,
}