var five = require('johnny-five');
var board = new five.Board();
var dgram = require('dgram');

board.on('ready' , function(){

	// Attach a piezo to pin 8
	var piezo = new five.Piezo(8);
	board.repl.inject({
		piezo: piezo
	});

	// use the dgram node module to create a udp4 socket
	var socket = dgram.createSocket('udp4');

	// bind your server to port 1337 
	socket.bind(1337);

	// and listen for messages
	socket.on('message' , function( msg , rinfo ) {
		// when a message is received , have the piezo play a tune
		piezo.play({
		    song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
		    beats: 1 / 4,
		    tempo: 100
		});
		
	});

	

});

