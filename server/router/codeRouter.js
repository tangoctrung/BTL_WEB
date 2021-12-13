const router = require('express').Router();
const { addCode, getAllCode, openCensusCode } = require('../controller/codeController');
const verifyToken = require('../middleware/auth');


// ADD CODE FOR CITY,...
router.post("/addcode", verifyToken, addCode);

// ADD CODE FOR CITY,...
router.get("/getallcode/:id", verifyToken, getAllCode);

// tạo một cuộc khảo sát
router.put("/opencensuscode", verifyToken, openCensusCode);


module.exports = router;