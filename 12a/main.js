let Stack=require("./stack")
let Queue=require("./queue")

// Stack example
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log('Stack size:', stack.size()); // Output: Stack size: 3
console.log('Popped element:', stack.pop()); // Output: Popped element: 30
console.log('Stack size after pop:', stack.size()); // Output: Stack size after pop: 2

// Queue example
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log('Queue size:', queue.size()); // Output: Queue size: 3
console.log('Dequeued element:', queue.dequeue()); // Output: Dequeued element: 10
console.log('Queue size after dequeue:', queue.size()); // Output: Queue size after dequeue: 2
