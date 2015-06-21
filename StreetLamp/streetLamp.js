var five = require('johnny-five');
var board = new five.Board();

board.on('ready' , function(){

	// connect the photoresister to A0 and the LED to 9
	var photoresistor = new five.Sensor({
		pin: 'A0',
		freq: '250'
	});
	this.repl.inject({
		sensor: photoresistor
	});

	var led = new five.Led(9);

	// Make the LED turn on when the photoresistor's value is greater than 600
	photoresistor.on('data' , function() {

		this.value > 600 ? led.on() : led.off();

	});

});
