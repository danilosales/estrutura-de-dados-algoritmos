import heapSort from './algorithms/sorting/heap-sort';
import BinarySearchTree from './data-structures/binary-search-tree';
import Deque from './data-structures/deque';
import Dictionary from './data-structures/dictionary';
import HashTable from './data-structures/hash-table';
import { MaxHeap, MinHeap } from './data-structures/heap';
import LinkedList from './data-structures/linked-list';
import Queue from './data-structures/queue';
import { Set } from './data-structures/set';
import Stack from './data-structures/stack';
import { parenthesesChecker } from './others/balanced-symbols';
import { baseConverter, decimalToBinary } from './others/base-converter';
import { fibonacciIterative } from './others/fibonacci';
import { hanoi, hanoiStack } from './others/hanoi';
import { hotPotato } from './others/hot-potato';
import { palindromeChecker } from './others/palindrome-checker';

// const stack = new Stack();
// stack.push(5);
// stack.push(8);
// console.log(stack.size())
// console.log(stack.peek());
// stack.pop();
// console.log(stack.size())
// stack.clear();
// console.log(stack.isEmpty());

// console.log(decimalToBinary(10));
// console.log(decimalToBinary(233));
// console.log(decimalToBinary(1000));
// console.log(baseConverter(100345, 2));
// console.log(baseConverter(100345, 8));
// console.log(baseConverter(100345, 16));
// console.log(baseConverter(100345, 35));


// console.log('{([])}', parenthesesChecker('{([])}')); // true
// console.log('{{([][])}()}', parenthesesChecker('{{([][])}()}')); // true
// console.log('[{()]', parenthesesChecker('[{()]')); // false


// console.log(hanoiStack(3));

// console.log(hanoi(3, 'source', 'helper', 'dest'));


// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue('John');
// queue.enqueue('Jack');
// console.log(queue.toString())
// queue.enqueue('Camila');
// console.log(queue.toString());
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.dequeue();
// queue.dequeue();
// console.log(queue.toString());


// const deque = new Deque();
// console.log(deque.isEmpty());
// deque.addBack('John');
// deque.addBack('Jack');
// console.log(deque.toString());
// deque.addBack('Camila');
// console.log(deque.toString());
// console.log(deque.size());
// console.log(deque.isEmpty());
// deque.removeFront();
// console.log(deque.toString());
// deque.removeBack();
// console.log(deque.toString());
// deque.addFront('John');
// console.log(deque.toString());

// const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
// const result = hotPotato(names, 7);
// result.eliminated.forEach(name => {
//   console.log(`${name} was eliminated from the Hot Potato game.`);
// })
// console.log(`The winner is: ${result.winner}`);


// console.log('a', palindromeChecker('a'));
// console.log('aa', palindromeChecker('aa'));
// console.log('kayak', palindromeChecker('kayak'));
// console.log('level', palindromeChecker('level'));
// console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
// console.log('Step on no pets', palindromeChecker('Step on no pets'));


// const list = new LinkedList();
// list.push(15);
// list.push(10);

// console.log(list);


// const set = new Set();
// set.add(1);
// console.log(set.values());
// console.log(set.has(1));
// console.log(set.size());
// set.add(2);
// console.log(set.values());
// console.log(set.has(2));
// console.log(set.size());
// set.delete(1);
// console.log(set.values());
// set.delete(2);
// console.log(set.values());

// const setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// const setB = new Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);
// const unionAB = setA.union(setB);
// console.log(unionAB.values());

// const setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// const setB = new Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);
// const intersectionAB = setA.intersection(setB);
// console.log(intersectionAB.values());

// const setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// const setB = new Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);
// const differenceAB = setA.difference(setB);
// console.log(differenceAB.values());

// const setA = new Set();
// setA.add(1);
// setA.add(2);
// const setB = new Set();
// setB.add(1);
// setB.add(2);
// setB.add(3);
// const setC = new Set();
// setC.add(2);
// setC.add(3);
// setC.add(4);
// console.log(setA.isSubsetOf(setB));
// console.log(setA.isSubsetOf(setC));


// const dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@email.com');
// dictionary.set('John', 'johnsnow@email.com');
// dictionary.set('Tyrion', 'tyrion@email.com');

// console.log(dictionary.toString());
// console.log(dictionary.hasKey('Gandalf'));
// console.log(dictionary.size());
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get('Tyrion'));

// dictionary.remove('John');
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.keyValues());

// dictionary.forEach((k, v) => {
//   console.log('forEach: ', `key: ${k}, value: ${v}`);
// })

// const hash = new HashTable();
// hash.put('Gandalf', 'gandalf@email.com');
// hash.put('John', 'johnsnow@email.com');
// hash.put('Tyrion', 'tyrion@email.com');
// console.log(hash.hashCode('Gandalf') + ' - Gandalf');
// console.log(hash.hashCode('John') + ' - John');
// console.log(hash.hashCode('Tyrion') + ' - Tyrion');
// console.log(hash.get('Gandalf'));
// console.log(hash.get('Danilo'));
// hash.remove('Gandalf');
// console.log(hash.get('Gandalf'));


// console.log('fibonacci(2)', fibonacciIterative(2));
// console.log('fibonacci(3)', fibonacciIterative(3));
// console.log('fibonacci(4)', fibonacciIterative(4));
// console.log('fibonacci(5)', fibonacciIterative(5));

// const tree = new BinarySearchTree();
// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14);
// tree.insert(20);
// tree.insert(18);
// tree.insert(25);
// tree.insert(6);

// const printNode = (value) => console.log(value);
// tree.inOrderTraverse(printNode);
// tree.preOrderTraverse(printNode);
// tree.postOrderTraverse(printNode);

// console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
// console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');

// console.log(tree.remove(15));
// tree.preOrderTraverse(printNode);

let heap = new MinHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);

console.log('Heap size: ', heap.size());
console.log('Heap is empty: ', heap.isEmpty());
console.log('Heap min value: ', heap.findMinimum());


heap = new MinHeap();
for(let i = 1; i < 10; i++) {
  heap.insert(i);
}
console.log('Extract minimum: ', heap.extract());

const maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);
console.log('Heap size: ', maxHeap.size());
console.log('Heap min value: ', maxHeap.findMinimum());


const array = [7, 6, 3, 5, 4, 1, 2];
console.log('before sorting: ', array);
console.log('after sorting: ', heapSort(array));
