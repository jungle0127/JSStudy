/**
 * http://usejsdoc.org/
 */
// create Function with constructor

var getName = new Function('name','return name');

var name = getName('jinghe');
console.log(name);

// call() method
/*
	The call() method is a predefined JavaScript function method.
	It can be used to invoke (call) a function with an owner object as the first argument (parameter).
	
	With call(), you can use a method belonging to another object.
	
	function.call(thisArg, arg1, arg2, ...)
*/
var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Mary",
    lastName: "Doe",
    fullName: person.fullName
}
var str = person.fullName.call(myObject);  // Will return "Mary Doe" 
//console.log(str);
//str = person.fullName();
//console.log(str);
str = myObject.fullName();
console.log(str);

var a = ['a'];
var b = ['b'];
console.log(a.concat(b));

function* idMaker(){
	let index = 0;
	while(index < 3){
		yield index++;
	}
}

var gen = idMaker();
var item = gen.next();
while(!item.done){
	console.log(item.value);
	item = gen.next(5);
}

var ar = ['a','b'];
for(let item of ar){
	console.log(item);
}