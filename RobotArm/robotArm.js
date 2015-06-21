var five = require('johnny-five');
var board = new five.Board();


board.on('ready' , function(){

	var potAngle;
	var servoAngle;

	// Attach a potentiometer to pin A2
	potentiometer = new five.Sensor({
		pin: 'A2',
		freq: 250
	});
	board.repl.inject({
		potentiometer: potentiometer
	});

	// Attach a servo to pin 9 
	var servo = new five.Servo(9);

	// Have the servo rotate as the potentiometer is turned	
	potentiometer.on('data' , function() {
		potAngle = this.value;
		servoAngle = five.Fn.map( potAngle , 0 , 1023 , 0 , 179 );
		servo.to(servoAngle);
	});

});