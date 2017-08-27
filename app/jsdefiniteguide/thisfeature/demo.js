/**
 * http://usejsdoc.org/
 */
// Call as a function
var Point = {
	x: 0,
	y: 0,
	moveTo: function(x,y){
		var that = this;
		var moveX = function(x){
			that.x = x;
		};
		var moveY = function(y){
			that.y = y;
		};
		moveX(x);
		moveY(y);
	}
}

Point.moveTo(1,1);
console.log(Point.x);
console.log(Point.y);
// console.log(x);
// console.log(y);

//Class as a Constructor
function Person(x,y){
	this.x = x;
	this.y = y;	
}

person = new Person(1,1);
console.log(person.x);
console.log(person.y);
Person(2,2);
console.log(x);
console.log(y);

// Apply & Call

function Employee(x, y){ 
	   this.x = x; 
	   this.y = y; 
	   this.moveTo = function(x, y){ 
	       this.x = x; 
	       this.y = y; 
	   } 
	} 
	 
	var p1 = new Employee(0, 0); 
	var p2 = {x: 0, y: 0}; 
	p1.moveTo(1, 1); 
	p1.moveTo.apply(p2, [10, 10]);
console.log(p1.x,p1.y);
console.log(p2.x,p2.y);

function Animal(){    
    this.name = "Animal";    
    this.showName = function(){    
        console.log(this.name,'1');    
    }    
}    
  
function Cat(){    
    this.name = "Cat";    
    console.log(this.name);
}    
   
var animal = new Animal();    
var cat = new Cat();  
//通过call或apply方法，将原本属于Animal对象的showName()方法交给对象cat来使用了。    
//输入结果为"Cat"   

animal.showName.call(cat,'','');    
animal.showName.apply(cat,[]);  