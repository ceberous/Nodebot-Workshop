var five = require('johnny-five');
var board = new five.Board();
var dnode = require('dnode');

board.on('ready' , function(){

	var readTemp;

	// attach a temperature sensor to A0
	var tempSensor = new five.Temperature({
		controller: 'TMP36',
		pin: 'A0'
	});
	board.repl.inject({
		tempSensor: tempSensor
	});

	tempSensor.on('data' , function(err , data) {
		readTemp = data.celcius;
	});	

	// dnode server on port 1337
	var server = dnode({
		getTemperature: function() {
			return readTemp;
		}
	});
	server.listen(1337);c

	// RPC Endpoint should expose a function called getTemperature
		// getTemperature should callback with the temperature in celcius



});