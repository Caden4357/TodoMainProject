require('dotenv').config()
const express = require("express");
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express();
require("./config/mongooseConfig");
// app.use(cookieParser)
app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cors({credentials:true, origin:'http://127.0.0.1:5173'}))
app.use(cookieParser())
require('./routes/TodoRoutes')(app)
app.listen(8000, () => console.log("The server is all fired up on port 8000"));