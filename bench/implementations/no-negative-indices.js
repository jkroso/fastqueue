
function Queue(){
  this.head = []
  this.tail = []
  this.index = 0
  this.headLength = 0
  this.length = 0
}

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

Queue.prototype.unshift = function(item){
  if (this.index === 0) {
    this.head.unshift(item)
    this.headLength++
  } else this.head[--this.index] = item
  this.length++
  return this
}

Queue.prototype.push = function(item){
  this.length++
  this.tail.push(item)
  return this
}

module.exports = Queue
