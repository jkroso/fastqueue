
var Queue = require('..')

it('simulated use', function(){
  var q = new Queue
  var frames = []
  q.push(1)
  q.push(2)
  var i = 3
  while (q.length > 0) {
    frames.push([q.shift(), q.length])
    var len = q.length
    q.unshift(i)
    q.should.have.a.lengthOf(len + 1)
    q.shift().should.equal(i)
    q.should.have.a.lengthOf(len)
    q.push(i++)
    q.should.have.a.lengthOf(len + 1)
    frames.push([q.shift(), q.length])
  }
  frames.should.eql([
    [1, 1],
    [2, 1],
    [3, 0],
    [4, 0]
  ])
})

it('.toJSON()', function(){
  var q = new Queue
  q.push(2)
  q.push(3)
  q.push(4)
  q.unshift(1)
  q.unshift(0)
  q.shift()
  q.toJSON().should.eql([1,2,3,4])
})
