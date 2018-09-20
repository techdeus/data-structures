var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; // private variable inaccessible to the public
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
    return value;
  };

  someInstance.pop = function() {
  
    var poppedValue = storage[count];
    delete storage[count];
    count--;
    return poppedValue;
  };

  someInstance.size = function() {
    if (count < 0) return 0;
    return Object.keys(storage).length;
  };

  return someInstance;
};


// var newStack = Stack();
// newStack.push('Marlon');
// console.log(newStack);
// // console.log(newStack.someInstance.storage);
// console.log(newStack.size());
// console.log(newStack);