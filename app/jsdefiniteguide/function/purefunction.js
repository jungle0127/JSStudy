/**
 * http://usejsdoc.org/
 */
// create Function with constructor

var getName = new Function('name','return name');

var name = getName('jinghe');
console.log(name);