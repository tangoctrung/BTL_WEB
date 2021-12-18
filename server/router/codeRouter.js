const router = require('express').Router();
const { addCode, getAllCode, openCensusCode, 
    checkTimeCensus, getAllCodeAndCitizen, editTimeCensus 
} = require('../controller/codeController');
const verifyToken = require('../middleware/auth');


// ADD CODE FOR CITY,...
router.post("/addcode", verifyToken, addCode);

// LẤY tất cả các vùng thuộc vùng có id
router.get("/getallcode/:id", verifyToken, getAllCode);

// Lấy tất cả các vùng cùng dân cư đã được khai báo của vùng có id
router.get("/getallcodeandcitizen/:id", verifyToken, getAllCodeAndCitizen);

// tạo một cuộc khảo sát
router.put("/opencensuscode", verifyToken, openCensusCode);

// edit time một cuộc khảo sát
router.put("/edittimecensus", verifyToken, editTimeCensus);


// kiểm tra xem địa phương đã hết thời gian khai báo hay chưa
router.put("/checktimecensus", verifyToken, checkTimeCensus);


module.exports = router;