const express = require('express');
const app = express();
const dotenv = require('dotenv')

const userRouter = require('./routes/users');
const blogRouter = require('./routes/blogs');

app.use("/", userRouter);
app.use("/blogs", blogRouter);

app.listen(process.env.PORT);