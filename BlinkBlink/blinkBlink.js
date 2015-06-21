var five = require('johnny-five');
var board = new five.Board();

board.on('ready' , function(){

	// Create new 'LED' instance
	var led = new five.Led(13);
	led.strobe(1000);

});