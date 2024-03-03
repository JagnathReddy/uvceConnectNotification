const express = require('express');
const { sendNotification } = require('../controller/notificationController');
const notificationRouter= express.Router();

notificationRouter.post('/',sendNotification);

module.exports = {notificationRouter}
