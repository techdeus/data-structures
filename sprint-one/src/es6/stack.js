class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.obj = {};
  	this.storage = {};
  	this.count = 0;
  }

  size() {
  	return this.count < 0 ? 0 : this.count;
  }

  push(value) {
  	this.storage[this.count] = value;
  	this.count++;
  	return value;
  }

  pop() {
    if (this.size() > 0) {
      var poppedValue = this.storage[this.count - 1];
  	  delete this.storage[this.count - 1];
  	  this.count--;
  	  return poppedValue;	
  	} else {
  		return null;
  	}
  }

}