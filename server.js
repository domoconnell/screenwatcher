var io = require('socket.io')(9999);
var connections = [];

io.on('connection', function(socket){
	socket.on('Register', function(data){
		var id = GetId();
		var newConn = {
			socket: socket,
			data: data
		}
		connections.push(newConn);
	})
	socket.on('click', function(data){
		for(i=0; i<connections.length; i++){
			var con = connections[i];
			if(con.data.type=='admin'){
				//we're emiting to this socket
				con.socket.emit('click', data);
			}
		}
	})

	socket.on('mouse', function(data){
		for(i=0; i<connections.length; i++){
			var con = connections[i];
			if(con.data.type=='admin'){
				//we're emiting to this socket
				con.socket.emit('mouse', data);
			}
		}
	})
})






GetId = function(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 10; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    

    var date = new Date().getTime()
	return text + date;
}