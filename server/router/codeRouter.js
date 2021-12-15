const router = require('express').Router();
const { addCode, getAllCode, openCensusCode, checkTimeCensus } = require('../controller/codeController');
const verifyToken = require('../middleware/auth');


// ADD CODE FOR CITY,...
router.post("/addcode", verifyToken, addCode);

// ADD CODE FOR CITY,...
router.get("/getallcode/:id", verifyToken, getAllCode);

// tạo một cuộc khảo sát
router.put("/opencensuscode", verifyToken, openCensusCode);

// kiểm tra xem địa phương đã hết thời gian khai báo hay chưa
router.put("/checktimecensus", verifyToken, checkTimeCensus);


module.exports = router;