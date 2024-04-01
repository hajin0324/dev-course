const express = require('express')
const app = express()

app.listen(3000)

const userRouter = require('./routes/users')
const blogRouter = require('./routes/blogs')

app.use("/", userRouter)
app.use("/blogs", blogRouter)