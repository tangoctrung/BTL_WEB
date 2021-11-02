const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());


app.get('/api/home', (req, res) => {
    res.json("hello");
})

app.get('/api/image', (req, res) => {
    res.json([
        "https://images.unsplash.com/photo-1624000787576-903939dae860?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1635417432032-60525731017b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1635099349534-a6fa2825ed36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80",
        "https://images.unsplash.com/photo-1635258522817-4a3c32db4086?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80",
        "https://images.unsplash.com/photo-1635393942332-7081a9352de6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    ]);
})

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log("Server running port 8800");
})