
var Queue = implementation

var q
before(function(i){
  q = new Queue
})

module.exports = function(){
  var i = 0
  while (i < 10) {
    if (i++ == 5) q.unshift(i)
    else q.push(i)
  }
  while (q.length > 0) {
    q.push(q.shift())
    q.shift()
  }
}
