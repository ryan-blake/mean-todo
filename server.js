var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;



app.all('/*', function(req, res){
  res.send('\
  <!DOCTYPE HTML>\
  <html>\
   <head>\
    <title>MEAN TODO APP boiler plate</title>\
    <base href="/"\
   </head>\
   <body>\
   <div ui-view></div>\
   <script src="bundle.js"></script>\
   </body>\
   </html>\
  ')
});

app.listen(PORT, function() {
  console.log('server running on ' + PORT)
});
