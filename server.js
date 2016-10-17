var express = require('express'),
	path    = require('path'),
	http    = require('http');
var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: false
})); 


app.use(express.static(__dirname + '/src'));
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/src/index.html');
});


var server = http.createServer(app);
server.listen(8085);
console.log('Listening on port 8085...');