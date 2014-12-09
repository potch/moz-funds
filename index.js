var express = require('express');
var request = require('request');
var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/static'));

var url = 'https://d3gxuc3bq48qfa.cloudfront.net/eoy-2014-total';

app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.get('/funds$', function(req, res) {
  request(url, function (error, response, body) {
    if (error) {
      res.status(400);
      res.end(error);
    } else {
      res.set('Content-Type', 'application/json');
      res.end(body);
    }
  });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
