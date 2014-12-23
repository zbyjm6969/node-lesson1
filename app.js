var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var userService = require('./models/userService');

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.get('/test',function(req,res){
	res.writeHead(200, {'Content-Type': 'text/plain','Access-Control-Allow-Origin':'*'});
	res.end('Hello World\n');
});

app.get('/user',userService.getUserById);

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
