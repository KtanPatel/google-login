var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/google_login', async (req, res, next) => {

  // var schema = {
  //   'email': {
  //     notEmpty: true,
  //     errorMessage: "Email is required"
  //   },
  //   'google_id': {
  //     notEmpty: true,
  //     errorMessage: "google_id is required"
  //   },
  //   'type': {
  //     notEmpty: true,
  //     errorMessage: "Type is required"
  //   }
  // };
  // req.checkBody(schema);
  // var errors = req.validationErrors();
  if (true) {
    // var user = await User.findOne({ 'google_id': req.body.google_id }).exec();
    // if (user) {
    user = { _id: '123456', type: 'admin' }
    console.log("secret key:", 'ABCDWXYZ')
    var token = jwt.sign({ id: user._id, type: user.type }, 'ABCDWXYZ', {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
    var result = {
      message: "Login Successfull",
      result: user,
      token: token
    };
    console.log('result => ', result);
    res.status(200).json(result);
    // } else {
    //   var userData = req.body;
    //   userData.name = userData.username;
    //   userData.username = "google_" + userData.username.replace(/\s+/g, '-').toLowerCase();
    //   userData['is_email_verified'] = true;
    //   var userModel = new User(userData);
    //   userModel.save(function (err, data) {
    //     if (err) {
    //       if (err.code == '11000') {
    //         if (err.message.indexOf('username') != -1) {
    //           res.status(config.BAD_REQUEST).json({
    //             message: "Username alrady exist",
    //             error: err
    //           });
    //         } else if (err.message.indexOf('email') != -1) {
    //           res.status(config.BAD_REQUEST).json({
    //             message: "Email alrady exist",
    //             error: err
    //           });
    //         } else {
    //           return next(err);
    //         }
    //       } else {
    //         return next(err);
    //       }
    //     } else {
    //       var token = jwt.sign({ id: data._id, type: data.type }, config.ACCESS_TOKEN_SECRET_KEY, {
    //         expiresIn: 60 * 60 * 24 // expires in 24 hours
    //       });
    //       var result = {
    //         message: "Login Successfull",
    //         result: data,
    //         token: token
    //       };
    //       res.status(config.OK_STATUS).json(result);
    //     }
    //   });
    // }

  } else {
    res.status(400).json({
      message: "Validation Error",
      error: errors
    });
  }
})

module.exports = router;
