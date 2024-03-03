const express= require('express');
const dotenv=require('dotenv');
dotenv.config();
const { notificationRouter } = require('./router/notification');
const app= express();
app.use(express.json());


app.use("/send",notificationRouter);
app.listen(8080);