var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');

mongoose.connect('mongodb://localhost:27017/ws_jquery');

var Cat = mongoose.model('Cat', {name:String});

router.post('/add', function(req, res){
  console.log(req.body.value);
  var kitty = new Cat({name: req.body.value});
  kitty.save(function(err){
    if(err){
      console.log(err);
    }
    res.send(kitty.toJSON());
  });
});

router.get('/cats', function(req, res){
  Cat.find({}).exec(function(err, cats){
    if(err){
      console.log(err);
    }
    res.send(cats);
  });
});

router.get('/*', function(request, response) {
  var file = request.params[0] || 'view/index.html';
  response.sendFile(path.join(__dirname, '../public/', file));
});

module.exports = router;
