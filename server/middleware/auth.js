const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

	try {
        const token = req.header("Authorization")

        if (!token) return res.json({ msg: "Invalid Authentication." })

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        if (!decoded) return res.json({ msg: "Invalid Authentication." })

        req.userId = decoded._id;
        next();
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = verifyToken;