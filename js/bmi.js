var bmi = function(w, h) {
return (w * 0.453592)/((h / 39.3701) * (h / 39.3701));
};

var weight = parseInt(prompt("How much do you weigh (in pounds)?"));
var height = parseFloat(prompt("How tall are you? (in inches)"));

alert("Your BMI is: "bmi(weight, height));
