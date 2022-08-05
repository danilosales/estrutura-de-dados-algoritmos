import { Queue } from './data-structures/queue';
import Stack from './data-structures/stack';
import { parenthesesChecker } from './others/balanced-symbols';
import { baseConverter, decimalToBinary } from './others/base-converter';
import { hanoi, hanoiStack } from './others/hanoi';

const stack = new Stack();
stack.push(5);
stack.push(8);
console.log(stack.size())
console.log(stack.peek());
stack.pop();
console.log(stack.size())
stack.clear();
console.log(stack.isEmpty());

console.log(decimalToBinary(10));
console.log(decimalToBinary(233));
console.log(decimalToBinary(1000));
console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 35));


console.log('{([])}', parenthesesChecker('{([])}')); // true
console.log('{{([][])}()}', parenthesesChecker('{{([][])}()}')); // true
console.log('[{()]', parenthesesChecker('[{()]')); // false


console.log(hanoiStack(3));

console.log(hanoi(3, 'source', 'helper', 'dest'));


const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString())
queue.enqueue('Camila');
console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());
