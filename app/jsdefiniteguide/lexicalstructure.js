/**
 * http://usejsdoc.org/
 */

/*
var flight = {
		airling: 'east',
		number: 825,
		departure:{
			IATA: 'SYD',
			city: 'CGD'
		}
};

console.log(flight.airling);
console.log(flight.departure.city);
console.log(flight);

let vstr = 'jinghe';
console.error(vstr);
*/
//let whiteList = [];
console.log('-----------');
console.log(typeof whiteList === 'undefined');
//console.log(ww === 'undefined');

// variable hoisting
//var x;
console.log(xx === undefined);
//var x = 3;

if(true){
	var xx = 5;
}
console.log(xx);
if(true){
	let y = 6;
}
var y = null;
console.log(null === y);
////////////////////////////////////////

typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof(NaN) === 'number'; // Despite being "Not-A-Number"
typeof Number(1) === 'number'; // but never use this form!

console.log(NaN !== NaN);
console.log('---');
var nn = 'ab';
console.log(isNaN(nn));


var sArray = ['a','b','c'];

for (var item of sArray){
	console.log(item);
}

function imgLoad(url) {
	  return new Promise(function(resolve, reject) {
	    var request = new XMLHttpRequest();
	    request.open('GET', url);
	    request.responseType = 'blob';
	    request.onload = function() {
	      if (request.status === 200) {
	        resolve(request.response);
	      } else {
	        reject(Error('Image didn\'t load successfully; error code:' 
	                     + request.statusText));
	      }
	    };
	    request.onerror = function() {
	      reject(Error('There was a network error.'));
	    };
	    request.send();
	  });
	}