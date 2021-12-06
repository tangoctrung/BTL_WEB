const router = require('express').Router();
const { addCode, getAllCode } = require('../controller/codeController');
const verifyToken = require('../middleware/auth');


// ADD CODE FOR CITY,...
router.post("/addcode", verifyToken, addCode);

// ADD CODE FOR CITY,...
router.get("/getallcode/:id", verifyToken, getAllCode);


module.exports = router;