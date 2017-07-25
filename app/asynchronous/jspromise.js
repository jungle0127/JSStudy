/**
 * JS standard library
 * JS promise
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */
var myFirstPromise = new Promise(function(resolve, reject){
    //
    setTimeout(function(){
        //resolve('success!');// runs well.
        reject("failed!"); //runs well.
    }, 1000);
});

myFirstPromise.then(function(successMessage){
    //successMessage may not be a string object.
    console.log("Yay! " + successMessage);
}).catch(function(errorMsg){
	console.log('ooPs,' + errorMsg);
});

