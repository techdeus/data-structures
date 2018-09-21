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
  var node = this;

  var explore = function(node) {
    if (node.value === target) {
    	return true;
    }
    for ( var i = 0; i < node.children.length; i++ ) {
      var result = explore(node.children[i]);
      if (result) { return true; } 
    }
    return false;
  }
  var result = explore(node);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
