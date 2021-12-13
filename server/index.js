const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');

const app = express();

const userRouter = require('./router/userRouter');
const codeRouter = require('./router/codeRouter');
const citizenRouter = require('./router/citizenRouter');
const censusRouter = require('./router/censusRouter');


// config middleware
app.use(cors());
dotenv.config();
app.use(express.json());


// kết nối db
// mongodb+srv://trungtn:tnkg23072001@cluster0.xspgv.mongodb.net/CitizenV?retryWrites=true&w=majority
mongoose
  .connect("mongodb://localhost:27017/CitizenV", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDB is connected"))
  .catch((err) => console.error(err));


// setup router
app.use("/api", userRouter);
app.use("/api", codeRouter);
app.use("/api", citizenRouter);
app.use("/api", censusRouter);


const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log("Server running port 8800");
})