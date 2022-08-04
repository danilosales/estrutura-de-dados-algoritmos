import Stack from './data-structures/stack';

const stack = new Stack();
stack.push(5);
stack.push(8);
console.log(stack.size())
console.log(stack.peek());
stack.pop();
console.log(stack.size())
stack.clear();
console.log(stack.isEmpty());
