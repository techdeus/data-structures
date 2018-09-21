var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newObj = Node(value);

    if (!list.head) {
      list.head = newObj;
      list.tail = newObj;
    } else {
      list.tail.next = newObj;
      list.tail = newObj;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  list.contains = function(target) {
    while (list.head) {
      if ( list.head.value === target ) {
        return true;
      }
      list.head = list.head.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
