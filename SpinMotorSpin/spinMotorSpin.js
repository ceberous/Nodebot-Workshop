var five = require('johnny-five');
var board = new five.Board();

board.on('ready' , function(){

	var motor = new five.Motor(9);

	// repeat infinately 
	while( 1 < 2 ) {

		// Spin the Motor at 200 mph
		motor.start(200);

		// Use board.wait to stop the motor spinning after 2 seconds
		this.wait(2000 , function() {
			motor.stop();
		});		

		// start it spinning again after another second
		this.wait(1000 , function() {
			motor.start(200);
		});	

	}

});
