/**
 * http://usejsdoc.org/
 */
//'use strict';

console.log(this);
var testThis = {
	name: 'jinghe',
	show: function() {
		console.log(this);
	}
	
}

testThis.show();

var name = "The Window";

var object = {
　　name : "My Object",

　　getNameFunc : function(){
	var self = this;
	console.log('*' + name);
　　　　return function(){
　　　　　　return self.name;
　　　　};
　　}
};
console.log(object.getNameFunc()());