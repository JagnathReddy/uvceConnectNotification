const { credential } = require("firebase-admin");
const { initializeApp } = require("firebase-admin/app");
const { getMessaging } = require("firebase-admin/messaging")

initializeApp({
    credential: credential.cert(JSON.parse(process.env.private_key))
});


exports.sendNotification = (req, res) => {

    const message = {
        notification: {
            title: req.body.title,
            body: req.body.body,
            image: req.body.image
        },
        topic: req.body.topic
    };

    getMessaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
            res.send(response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
            res.send(error);
        });
}
//req=>
// body=>{
//     topic:String,
//     title:String,
//     clubName:String,
//     adminName:String,
//     image:url
// }