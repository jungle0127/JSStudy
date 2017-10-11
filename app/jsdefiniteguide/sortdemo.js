/**
 * http://usejsdoc.org/
 */
var nameArray = ['bananas', 'apple', 'cherries'];
console.log(nameArray);
console.log(nameArray.sort());
console.log(nameArray.sort((itemA,itemB) => {
	var itemAU = itemA.toLowerCase();
	var itemBU = itemB.toLowerCase();
	if(itemAU > itemBU){
		return 1;
	}
	else if(itemAU < itemBU){
		return -1;
	}
	else{
		return 0;
	}
}));