var five = require('johnny-five');
var board = new five.Board();

board.on('ready' , function(){

	// Create new 'Servo' instance
	var servo = new five.Servo(9);

	// use servo.sweep to rotate between 0 and 180
	servo.sweep([0 , 180]);

	// use board.wait to schedule a reset callback after 3 seconds
		// reset should 'stop' and 'center' the servo
	this.wait(3000 , function() {
		servo.stop();
		servo.center();
	});	


});