/**
 * http://usejsdoc.org/
 * A good article for asynchronous JS:
 * https://code.tutsplus.com/tutorials/event-based-programming-what-async-has-over-sync--net-30027 
 */
console.log('a');
setTimeout(function() {
	console.log('c');
},500);
setTimeout(function(){
	console.log('d');
},500);
setTimeout(function(){
	console.log('e');
},500);
console.log('b');