const router = require('express').Router();  //es5 syntax
const UserChat = require('../models/chat.model.js');

router.route('/').get((req,res)=>{
    UserChat.find()
    .then(userChats => res.json(userChats)
    )
    .catch(err=> res.status(400).json('Error:'+ err))
});

router.route('/add').post((req,res)=>{
    const userChat = req.body.username;
    const newChat = new User({UserChat});

    newUser.save()
    .then(()=> res.json('User added!'))
    .catch(err => res.status(400).json('error:' + err))
});

module.exports = router;