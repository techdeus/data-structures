var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.count = 0;
  return obj;

};

var stackMethods = {
	
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
    return value;
  }, 

  pop: function() {
  	if (this.size() > 0) {
  	  var poppedValue = this.storage[this.count - 1];
  	  delete this.storage[this.count - 1];
  	  this.count--;
  	  return poppedValue;	
  	} else {
  		return null;
  	}	
  },

  size: function() {
  	return this.count < 0 ? 0 : this.count;
  }
};


