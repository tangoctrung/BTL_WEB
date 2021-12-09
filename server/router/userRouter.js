const router = require('express').Router();
const { 
    registerUser, loginUser, getUser, getAllUser, updateUser
} = require('../controller/userController');

const verifyToken = require('../middleware/auth');


// CREATE A USER / REGISTER
router.post("/auth/register", registerUser);

// LOGIN
router.post("/auth/login", loginUser);

// GET USER
router.get("/getuser", verifyToken, getUser);

// GET ALL USER
router.get("/getalluser", verifyToken, getAllUser);

// UPDATE A USER
router.put("/updateuser/:id", verifyToken, updateUser);




module.exports = router;