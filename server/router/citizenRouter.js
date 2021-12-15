const router = require('express').Router();
const { 
    AddCitizen, UpdateCitizen, DeleteCitizen ,
    getCitizenNumCCCD, getCitizenId,  getAllCitizen,
    getAllCitizenCode,
} = require('../controller/citizenController');
const verifyToken = require('../middleware/auth');

// nhập dữ liệu cho citizen
router.post("/addcitizen", verifyToken, AddCitizen);

// cập nhật dữ liệu cho citizen
router.put("/updatecitizen/:id", verifyToken, UpdateCitizen);

// xóa dữ liệu của citizen
router.delete("/deletecitizen/:id", verifyToken, DeleteCitizen);

// lấy thông tin tất cả công dân
router.get("/getallcitizen", verifyToken, getAllCitizen);

// lấy thông tin tất cả công dân theo vùng
router.get("/getallcitizencode", verifyToken, getAllCitizenCode);

// lấy thông tin tất cả công dân theo điều kiện nào đó
router.get("/getcitizennumCCCD", verifyToken, getCitizenNumCCCD);

// lấy thông tin tất cả công dân theo điều kiện nào đó
router.get("/getcitizenid/:id", verifyToken, getCitizenId);


module.exports = router;