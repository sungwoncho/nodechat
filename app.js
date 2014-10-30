var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function (req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket){ 
	console.log('A client connected.');
	socket.on('disconnect', function () { 
		console.log('A client disconnected.')
	})

	socket.on('new message', function (message){
		io.emit('new message', message)
	});
});

server.listen(8080, function (){
	console.log('listening on the port 8080');
});