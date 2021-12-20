const router = require('express').Router();
const { createMail, 
    deleteMail,
    getAllMail,
    updateWatched, } = require('../controller/mailController');
const verifyToken = require('../middleware/auth');

// tạo một mail
router.post('/createmail', verifyToken, createMail);

// xóa một mail
router.put('/deletemail', verifyToken, deleteMail);

// lấy tất cả  mail của 1 user
router.get('/getallmail', verifyToken, getAllMail);

// update watched của một mail
router.put('/updatewatched', verifyToken, updateWatched);

module.exports = router;