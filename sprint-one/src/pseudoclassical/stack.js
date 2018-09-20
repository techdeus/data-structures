var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.obj = {};
  this.storage = {};
  this.count = 0;

}

Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
    return value;
},

Stack.prototype.pop = function() {
  	if (this.size() > 0) {
  	  var poppedValue = this.storage[this.count - 1];
  	  delete this.storage[this.count - 1];
  	  this.count--;
  	  return poppedValue;	
  	} else {
  		return null;
  	}	
},

Stack.prototype.size = function() {
  return this.count < 0 ? 0 : this.count;
} 