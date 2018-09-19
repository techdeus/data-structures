var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var lowestCount = 0;
  var arr = [];
  // Implement the methods below

  someInstance.enqueue = function(value) {
    arr.push(lowestCount);
    storage[lowestCount] = value;
    count++;
    lowestCount++;
  };

  someInstance.dequeue = function() {
    var node = storage[arr[0]];
    delete storage[arr[0]];
    arr.shift();
    count--;
    return node;
  };

  someInstance.size = function() {
    if ( arr.length <= 0 ) {
      return 0;
    } else {
      return count;
    }
  };

  return someInstance;
};

// var queue = Queue();
// queue.enqueue('a');
// queue.enqueue('b');
// console.log(queue.dequeue());
// queue.enqueue('c');

// console.log(queue.dequeue());
