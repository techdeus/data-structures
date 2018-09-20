var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
  	storage : {}, 
  	count : 0,
  	lowestCount : 0,
  	arr : []
  };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.arr.push(this.lowestCount);
    this.storage[this.lowestCount] = value;
    this.count++;
    this.lowestCount++;
  }, 

  dequeue: function() {
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

  size: function() {
  	 if ( this.arr.length <= 0 ) {
      return 0;
      } else {
        return this.count;
      }
  }

};


