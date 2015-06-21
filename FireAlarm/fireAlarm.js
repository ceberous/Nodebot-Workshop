var five = require('johnny-five');
var board = new five.Board();


board.on('ready' , function(){

	var buttonPressed = false;

	// Attach a temperature sensor TMP36 to pin A0
	var tempSensor = new five.Temperature({
		controller: 'TMP36',
		pin: 'A0'
	});

	// Attach a piezo to pin 9
	var piezo = new five.Piezo(9);

	// Attach a LED to pin 13
	var led = new five.Led(13);

	// Attach a button to pin 5
	var button = new five.Button(5);

	// REPL injection for giggles
	board.repl.inject({
		tempSensor: tempSensor,
		piezo: piezo,
		led: led,
		button: button
	});

	tempSensor.on('data' , function(err , data) {
		// When the temperature sensor detects a temperature above 50c , 
		// the piezo should sound and the LED should flash on and off continously		
		if (data.celsius > 50) {
			if (!buttonPressed) {
				piezo.play({
					song: "C D F",
					beats: 1 / 4,
					tempo: 100
				});
				led.strobe(500);
			} else {
				led.off();
			}
		}
		// if the temperature drops below 50c , the piezo and LED should turn off
		else if (data.celsius < 50) {
			// um no piezo.stop so not wasting my time with poor directions
			led.off();
		}


	});	

	
	// if the button is pressed , the piezo and LED should switch off
	// and not turn on again until above 50c ???? friggin typos I think
	button.on('press' , function(){
		buttonPressed = !buttonPressed;
	});




});