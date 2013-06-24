
var chai = require('./chai')
	, Queue = require('..')

var q
beforeEach(function(){
	q = new Queue
})

describe('fastqueue', function(){
	it('should work', function(){
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
			[4, 0],
		])
	})
})

describe('.remove()', function(){
	it('should remove all instances of `value`', function(){
		q.push(2)
		q.push(1)
		q.push(1)
		q.remove(1)
		q.should.have.a.lengthOf(1)
	})

	it('should return true if it removed something', function(){
		q.push(1)
		q.remove(1).should.be.true
	})

	it('should return false if it didn\'t', function(){
		q.push(1)
		q.remove(2).should.be.false
	})
})

describe('.toJSON()', function(){
	it('should return a dense array', function(){
		q.push(2)
		q.push(3)
		q.push(4)
		q.unshift(1)
		q.unshift(0)
		q.shift()
		q.toJSON().should.eql([1,2,3,4])
	})
})
