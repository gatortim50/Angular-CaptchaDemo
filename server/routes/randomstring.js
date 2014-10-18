//
// just.randomstring to generate
// the captcha string

var randomstring = require('just.randomstring');

exports.findCaptcha = function(req, res) {
  var rs = randomstring(5);
  res.send({captcha: rs});
};


