const router = require('express').Router();
const { registerUser, loginUser, getUser, getAllUser } = require('../controller/userController');
const verifyToken = require('../middleware/auth');


// CREATE A USER / REGISTER
router.post("/auth/register", registerUser);

// LOGIN
router.post("/auth/login", loginUser);

// GET USER
router.get("/getuser", verifyToken, getUser);


// GET ALL USER
router.get("/getalluser", verifyToken, getAllUser);




module.exports = router;