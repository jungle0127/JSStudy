/*
* Refer the online training documents:
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures For Chinese
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures For English
* 
* series of Closure article:
* http://www.cnblogs.com/wangfupeng1988/p/3977924.html
*/

var fn = function () { };
console.log(fn instanceof Object); 
////////////////////
var obj = { a: 10, b: 20 };
var arr = [5, 'x', true];
////// ==>

var obj = new Object();
obj.a = 10;
obj.b = 20;

var arr = new Array();
arr[0] = 5;
arr[1] = 'x';
arr[2] = true;

console.log(typeof (Object));  // function
console.log(typeof (Array));  // function