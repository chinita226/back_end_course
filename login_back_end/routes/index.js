var express = require('express');
var router = express.Router();

/* dummy user array*/
var users = [
  {
    email: 'tian226@gmail.com',
    password: 'youarefunny'
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to Tian's backend paradise! :)");
});

router.post('/login', function(req,res){
  let result = users.find(user => user.email == req.body.email);
  if(result) {
    if (result.password==req.body.password){
      res.status(200).send ({
        message: "You have logged in successfully!"
      })
    } else {
      res.status(200).send ({
        message: "Password incorrect!"
      }) 
    }
  } else {
      res.status(200).send ({
        message: "We have not found the user!"
      })
  }
});


module.exports = router;
