var express = require('express')
var app = express();


app.use(express.static('public'));


app.get('/index.htm', function(req, res){
  res.sendFile(__dirname + "/" + "index.htm");	
})

app.get('/process_get', function(req, res){
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  },
  console.log(res);
  res.send(JSON.stringify(response));
})

app.get('/', function(req, res) {
  console.log("Got a GET request for the homepage");
  res.send('Hello Get');	
})

app.post('/', function(req, res){
  console.log('Git a POST request for the homepage');
  res.send('Hello Post');
})

app.delete('/del_user', function(req, res) {
  console.log('Got a DELETE request for /del_user');
  res.send('Hello DELETE');
})

app.get('/list_user', function(req, res) {
  console.log('Got a GETrequest for /list_user');
  res.send('Page Listing');
})

app.get('/ab*cd', function(req, res) {
  console.log('Got a get request for /ab*cd');
  res.send('Page Pattern Match');
})


var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port);
})
