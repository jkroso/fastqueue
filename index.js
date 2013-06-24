module.exports = Queue

function Queue(){
  this.head = []
  this.tail = []
  this.index = 0
  this.headLength = 0
  this.length = 0
}

/**
 * Get an item from the front of the queue
 * 
 * @return {x}
 */

Queue.prototype.shift = function(){
	// swap head for tail
  if (this.index >= this.headLength) {
    var t = this.head
    this.head = this.tail
    this.tail = t
    t.length = 0
    this.index = 0
    this.headLength = this.head.length
    if (!this.headLength) return
  }

  var value = this.head[this.index]
  // free the ref for GC
  this.head[this.index++] = null
  this.length--
  return value
}

/**
 * Insert a new item at the front of the queue.
 * 
 * @param {x} item
 * @return {this}
 */

Queue.prototype.unshift = function(item){
	if (this.index === 0) {
		this.head.unshift(item)
		this.headLength++
	} else this.head[--this.index] = item
  this.length++
  return this
}

/**
 * Push a new item on the end of the queue.
 * 
 * @param {x} item
 * @return {this}
 */

Queue.prototype.push = function(item){
  this.length++
  this.tail.push(item)
  return this
}

/**
 * remove all instances of `value` from the queue
 * 
 * @param {x} value
 * @return {Boolean}
 */

Queue.prototype.remove = function(value){
	var a = remove(this.head, value, this.index)
	var b = remove(this.tail, value, 0)
	if (a || b) {
		this.length -= a + b 
		this.headLength = this.head.length
		return true
	}
	return false
}

function remove(arr, value, i){
	var removed = 0
	while (i < arr.length) {
		if (arr[i] === value) {
			arr.splice(i, 1)
			removed++
		} else i++
	}
	return removed
}

/**
 * for JSON.stringify
 * 
 * @return {Array}
 * @api private
 */

Queue.prototype.toJSON = function(){
	return this.head.slice(this.index).concat(this.tail)
}