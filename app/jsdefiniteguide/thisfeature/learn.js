/**
 * http://usejsdoc.org/
 */
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

var jh = [1,2,3]
var lh = jh.map(x => x * x);
console.log(lh);

//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes

function Person() {
	var self = this;
	  // The Person() constructor defines `this` as itself.
	  self.age = 0;

	  setInterval(function growUp() {
	    // In nonstrict mode, the growUp() function defines `this` 
	    // as the global object, which is different from the `this`
	    // defined by the Person() constructor.
	    self.age++;
	  }, 1000);	  
	 
	  this.toString = function(){
		  console.log(self.age);
	  }
}

var p = new Person();
p.toString();