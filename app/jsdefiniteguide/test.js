/**
 * http://usejsdoc.org/
 */

var str = '	https://gal-d.globalization.veritas.com:8443/store/DIFF/61e611c3-ac0e-47b3-c3b8-08d4e0f12560.png';
 console.log(str.slice(-40));
		
 function process_WhiteList(text, whiteList) {
	  var whitelistArray = [];	  
	  if(typeof whiteList !== 'undefined'){
	      whitelistArray = whiteList.split(',');
	  }	  
		var digitalReg = /(\d+(\.{0,1})\d*)%{0,1}/g;
		var volumeReg = /\d*\.*\d*\s*(K|M|G|T)(B|b){0,1}/g;
		var MACaddress = /^([0-9a-fA-F]{2})(([/\s:-][0-9a-fA-F]{2}){5})$/g;
		var networkCard = /eth[0-9]{1}/g;
		var transMarker = /\s*[\^]{3}.*/g;
	  var objectName = /\w+([._-]\w+)+\w+/g;
	  whitelistArray = whitelistArray.concat(getPulsarWhitelist());
	  whitelistArray.push(volumeReg);
	  whitelistArray.push(digitalReg);
	  whitelistArray.push(MACaddress);
	  whitelistArray.push(networkCard);
	  whitelistArray.push(transMarker);
	  whitelistArray.push(objectName);
	  
	  for (var index = 0; index < whitelistArray.length; index++) {		  
	    var temp;
	    if (typeof whitelistArray[index] === 'string'){
	      temp = new RegExp(whitelistArray[index], 'g');
	    }
	    else {
	      temp = whitelistArray[index];
	    }
	    text = text.replace(temp, '');	    
	  }
	  return text;
	}
	//For pulsar
	function getPulsarWhitelist(){
	  var stringArray = ['AMS','Veritas','TM','Master','Media','EEB','A'];
	  var regArray = [/[\d\D]*\.engba\.veritas\.com/g, /V-\d{3}-\d{3}-\d{4}/g];
	  return stringArray.concat(regArray);
	}
//var reg = /\w+([._-]\w+)+\w+/g;
//console.log('nbapp258.engba.veritas.com (AMS)'.replace(reg,''));
//var regArray = ['A','Veritas','TM','AMS','Master','Media','EEB'];
//console.log(regArray.join().split(','));
console.log(process_WhiteList('nbapp258.engba.veritas.com (AMS)'));
//console.log(Object.prototype.toString.call(''));
//console.log('nbapp258.engba.veritas.com (AMS)'.replace(/AMS/g,''));

console.log('Jinghe'<'Jotus');