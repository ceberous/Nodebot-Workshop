var five = require('johnny-five');
var board = new five.Board();

board.on('ready' , function(){

	// Attach a button to pin 5 and an LED to pin 9 
	var button = new five.Button(5);
	var led = new five.Led(9);

	// Use the button class to detect 'press' events 
	button.on('press' , function(){
		// and toggle your LED on/off
		led.toggle();
	});

});
