'use strict';

var q = require('q');

function test(){
	var deferred = q.defer();
	setTimeout(function(){
		console.log("test");
		//deferred.resolve('I am OK');
		deferred.reject('failed');
	},3000);
	return deferred.promise;
}
test().then(console.log,console.error);
console.log("alksdfj");
console.error('jjjj');