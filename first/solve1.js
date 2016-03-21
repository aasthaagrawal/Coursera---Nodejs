var rect = require('./rectangle-1');


function solveRect(l,b){
	console.log("Solving rectangle with l = " + l + " and b = " + b);
	console.log("Area : " + rect.area(l,b));
	console.log("Perimeter : " + rect.perimeter(l,b));
}

solveRect(2,4);
solveRect(6,2);