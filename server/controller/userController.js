const User = require('../model/userModel');
const Code = require('../model/codeModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var moment = require('moment');



// CREATE A USER / REGISTER
const registerUser = async (req, res) => {

    try {
        const {accountName, password, typeAccount, providerAccount} = req.body;

        // kiểm tra xem tên tài khoản đã tồn tại hay chưa
        const user1 = await User.findOne({accountName: req.body.accountName});
        if (user1) 
            return res.send({
                success: false, 
                message: "Tên tài khoản này đã được cấp, bạn không thể cấp lại.",
                messageDetail: `Tài khoản này được cấp vào ngày ${moment(user1.createdAt).format("DD-MM-YYYY")} bởi ${user1.providerAccount.name} (${user1.position})`,

            });

        // kiểm tra xem password có hợp lệ hay không
        if (req.body.password.length < 8) 
            return res.send({
                success: false, 
                message: "Password phải từ 8 kí tự.",
                messageDetail: `Mật khẩu của bạn mới có ${password.length} ký tự. Chúng tôi cần bạn chọn mật khẩu có từ 8 ký tự trở lên để đảm bảo tính bảo mật.`
            });

        // mã hóa password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        let position = "";
        // if (req.body.typeAccount == "A1"){
        //     position = "Tổng cục Dân số thuộc Bộ Y tế ";
        // }

        if (req.body.typeAccount != "A1") {
            const code = await Code.find({code: accountName});
            
            // nếu thành phố có mã gióng tk chưa được khai báo thì báo lỗi
            if (!code) {
                return res.send({
                    success: false, 
                    message: "Tên tài khoản không hợp lệ.",
                    messageDetail: "Có thể vùng nào đó có mã như tên tài khoản chưa được khai báo, bạn cần khai báo mã cho vùng đó trước."
                })
            }
            // xác định chức vụ, vị trí của tài khoản từ accountname
            switch (typeAccount) {
                case "A2":
                    position = "Chi cục dân số thuộc Sở Y tế "  + code.name;
                case "A3":
                    position = "Công chức thực hiện công tác dân số tại Phòng Y tế "  + code.name;
                case "B1":
                    position = "Viên chức dân số thuộc Trạm Y tế "  + code.name;
                case "B2":
                    position = "Cộng tác viên dân số tại "  + code.name;
    
                default:
                    position = "";
            }
        } else if (typeAccount == "A1"){
            position = "Tổng cục Dân số thuộc Bộ Y tế ";
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
        const token = jwt.sign({_id: newUser._id}, process.env.ACCESS_TOKEN_SECRET);

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
            "name","typeAccount"
        ]);
        res.status(200).json({status: true, users});
    } catch (error) {
        res.status(500).json(error);
    }
}




module.exports = {
    registerUser,
    loginUser,
    getUser,
    getAllUser,
}