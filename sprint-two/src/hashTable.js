
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index); // get the bucket at the particular index

  if ( !bucket ) {  
  // if empty place an array inside the empty bucket
    bucket = []; // set bucket to an empty array
    this._storage.set(index, bucket); // set the index with a empty bucket
  }
  var found = false; // declare a variable found and assign it with a default value false.
  // iterate over the bucket
  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i]; // declare a tuple
    // if the key matches the first value in the tuple
    if ( tuple[0] === k ) {
      tuple[1] = v; // assign the second value to value that is passed
      found = true; // update to found equals true
      break; // break out of the for loop
    } 
  }
  // if no key found, push a new tuple to the bucket
  if ( !found ) {
    bucket.push([k, v]);
    this._count++; // increase the count by 1 to keep track of how many key/value pairs we have in the hash table
    // if the count is greater than 75% of the limit invoke the resize function and pass the limit times 2
    if ( this._count > this._limit * 0.75 ) {
      this._resize(this._limit * 2);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index); // declare and assign a bucket to the index passed in the storage array
  
  // if empty return null
  if ( !bucket ) {
    return;
  }
  // loop through the bucket of tuples, 
  for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    // if the tuple's first value matches the key passed, then return the value
    if ( tuple[0] === k ) {
      return tuple[1];
    }
  }
  return; // return null if NO key/value pair found
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index);
  // if the bucket does not exist, return null, there is nothing to delete!
  if ( !bucket ) {
    return null;
  }
  // iterate through the bucket
  for ( var i = 0; i < bucket.length; i++ ) {
    // set the bucket to 
    var tuple = bucket[i];

    if ( tuple[0] === k ) {
      bucket.splice(i, 1);
      this._count = this._count - 1;
      // if the count is less than 25% of the limit invoke the resize function and pass the limit divided by 2
      if ( this._count < this._limit * 0.25 ) {
        this._resize(this._limit / 2);
      }
      return tuple[1];
    }  
  }
  return null;
};

HashTable.prototype._resize = function(newLimit) {
  
  var oldStorage = this._storage; // store the current instance of the storage in an variable

  this._limit = newLimit; // change the limit property to the new value
  this._storage = LimitedArray(newLimit); // create a new instance passing the new limit
  this._count = 0; // reset the count variable to zero
  
  var context = this;
  // iterate over the values in old storage and pass them to this._storage
  oldStorage.each(function(bucket) {
   
   if ( !bucket ) { return; }
   // reinsert tuples
   for ( var i = 0; i < bucket.length; i++ ) {
    var tuple = bucket[i];
    context.insert(tuple[0], tuple[1]);
   }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */