var convert = function(liters) {
return liters * 0.264172;
};

var input = parseFloat(prompt("How many liters do you have?"));

alert("Then you have " + convert(input) + " gallons!");
