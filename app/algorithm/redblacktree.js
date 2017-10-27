"use strict";

var NodeColor = { Black: "black", Red: "red"};

var RBNode = function(_data, _parent, _color){
	this.data = _data;
	this.Parent = _parent;
	this.Color = _color;
	this.LeftNode = null;
	this.RightNode = null;
};

var RedBlackBinaryTree = function(){
	this.RootNode = null;
	this.Insert = function(insertValue){
		if(this.RootNode === null){
			this.RootNode = new RBNode(insertValue,null,NodeColor.Black);
		}
		else{
			var newNode = insert.call(this,insertValue);
			insertFixUp.call(this.newNode);
		}
	}
	
	function insert(key){
		var node = this.RootNode;
		var newNode = new RBNode(key,null,NodeColor.Red);
		while(true){
			if(key > node.Data){
				
			}
		}
	}
}