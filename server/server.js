var express = require('express'),
  bodyParser = require('body-parser'),
  //randomstring = require('just.randomstring'),
  cors = require('cors');

var captcha = require('./routes/randomstring');

var app = express();

app.use(bodyParser.json());

app.use(cors());

//var rs = randomstring(5);

// basic route
app.get('/', function(req, res) {
  res.send('Captcha API is at http://localhost:3000');
});


// methods in routes/randomstring.js
app.get('/captcha', captcha.findCaptcha);


var port = 3000;
app.listen(port);
console.log('Server running at http://127.0.0.1:' + port);
