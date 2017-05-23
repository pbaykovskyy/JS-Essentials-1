var euro = prompt('How much euro do you have?');
var dollar = prompt('How much dollar do you have?');

var dollarRate = 26.2;
var euroRate = 30.1;

var x = euro * euroRate;

var y = dollar * dollarRate;

var z = euroRate / dollarRate;

alert (euro + " euros are equal " + x + " grn. " + "," + dollar + " dollars are equal " + y + " grn. " + "," + " one euro is equal " + z + " dollars ");