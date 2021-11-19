const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// CREATE A USER / REGISTER
const registerUser = async (req, res) => {
    try {
        const {lastName, bufferName, firstName, date, gender, numCCCD, phone, email} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const user1 = await User.findOne({email: req.body.email});
        const user2 = await User.findOne({numCCCD: req.body.numCCCD});
        if (user1) 
            return res.send({success: false, message: "Email đã được sử dụng."});
        if (user2) 
            return res.send({success: false, message: "Số CCCD đã được sử dụng."});
        if (req.body.password.length < 8) 
            return res.send({success: false, message: "Password phải từ 8 kí tự."});
        
        const newUser = new User({
            lastName, bufferName, firstName, date, gender, numCCCD, phone, email,
            password: hashedPass,
        });
        const user = await newUser.save();
        // tạo token
        const token = jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN_SECRET);
        
        res.status(200).json({status: true, user, token});

    } catch (error) {
        res.status(500).json(error);
    }
}


// LOGIN
const loginUser = async (req, res) => {
    try {
        const newUser = await User.findOne({email: req.body.email});
        if (!newUser) return res.json({status: false, message: 'Sai email hoặc mật khẩu.'});  
            
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




module.exports = {
    registerUser,
    loginUser,
    getUser
}