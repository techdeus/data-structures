var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var newNode = Tree(value);
	this.children.push(newNode);
};

treeMethods.contains = function(target) {
  var target = target;
  var node = this.children;

  for ( var i = 0; i < node.length; i++ ) {
  	if ( node[i].value === target ) {
  		return true;
  	} 
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
