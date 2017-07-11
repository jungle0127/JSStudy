/**
 * http://usejsdoc.org/
 * 
 * A good article for asynchronous JS:
 * https://code.tutsplus.com/tutorials/event-based-programming-what-async-has-over-sync--net-30027
 * http://blog.codingplayboy.com/2017/04/25/js_async/ 
 * http://www.uu3aa.com/a/87184
 * 
 * nodejs for promise: 
 * https://cnodejs.org/topic/560dbc826a1ed28204a1e7de
 * https://my.oschina.net/sundq/blog/227410
 * http://blog.csdn.net/vivianhope/article/details/52837132
 * http://www.jianshu.com/p/6d513be09d8c
 * http://www.cnblogs.com/haogj/p/4480772.html
 * http://wiki.commonjs.org/wiki/Promises/A
 * 
 * promises/A+:
 * https://promisesaplus.com/
 */
var jquery = require('../../node_modules/jquery/dist/jquery.min.js');
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

console.error('adb');