var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.obj = {};
  this.storage = {};
  this.count = 0;
  this.lowestCount = 0;
  this.arr = [];
}

Queue.prototype.enqueue = function(value) {
    this.arr.push(this.lowestCount);
    this.storage[this.lowestCount] = value;
    this.count++;
    this.lowestCount++;
},

Queue.prototype.dequeue = function(value) {
    if ( this.size() > 0 ) {
  	  var node = this.storage[this.arr[0]];
  	  delete this.storage[this.arr[0]];
  	  this.arr.shift();
  	  this.count--;
  	  return node;	
  	} else {
  		return null;
  	}	
},

Queue.prototype.size = function() {
    if ( this.arr.length <= 0 ) {
      return 0;
      } else {
        return this.count;
      }
}

