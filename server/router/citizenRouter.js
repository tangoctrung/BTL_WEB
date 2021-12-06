const router = require('express').Router();
const { AddCitizen, UpdateCitizen, DeleteCitizen } = require('../controller/citizenController');
const verifyToken = require('../middleware/auth');

// nhập dữ liệu cho citizen
router.post("/addcitizen", verifyToken, AddCitizen);

// cập nhật dữ liệu cho citizen
router.put("/updatecitizen", verifyToken, UpdateCitizen);

// xóa dữ liệu của citizen
router.delete("/deletecitizen", verifyToken, DeleteCitizen);


module.exports = router;