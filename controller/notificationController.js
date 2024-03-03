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
            res.send({
                status:200,
                message:response.toString()
            });
        })
        .catch((error) => {
            res.send({
                status:500,
                message:error.toString()
            });
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