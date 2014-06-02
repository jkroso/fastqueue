# Fast Queue

While normal JavaScript arrays can be used as FIFO queues, the `.shift()` call is very slow if the queue gets large because it has to reindex all the remaining items on every shift.

This library is a fast queue that only implements `.push(item)`, `.shift()`, `.unshift(item)` and `.length` from the Array interface.

Internally it uses two arrays and cycles them and uses counters so that the `.shift()` calls are still fast.

## Usage

```js
var Queue = require('fastqueue')
var q = new Queue

q.length // => 0
q.push(1)
q.push(2)
q.push(3)
q.length // => 3
q.toJSON() // => [1,2,3]
q.shift() // => 1
q.unshift(1)
q.toJSON() // => [1,2,3]
```

## API

### Queue.shift()

  Get an item from the front of the queue

### Queue.unshift(item)

  Insert `item` at the front of the queue

### Queue.push(item)

  Insert `item` to the end of the queue
