var convert = function(degreesc) {
return (9 * degreesc) / 5 + 32;
};

var input = parseFloat(prompt("What is the temperature in Celsius?"));



alert("The temperature in Fahrenheit is: " + convert(input) + " degrees Fahrenheit.");
