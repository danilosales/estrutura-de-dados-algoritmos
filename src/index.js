import { BFS, breadthFirstSearch } from './algorithms/graph/breadth-first-search';
import { depthFirstSearch, DFS } from './algorithms/graph/depth-first-search';
import { dijkstra } from './algorithms/graph/dijkstra';
import { floydWarshall } from './algorithms/graph/floyd-warshall';
import { kruskal } from './algorithms/graph/kruskal';
import { prim } from './algorithms/graph/prim';
import { bubbleSort } from './algorithms/sorting/bubble-sort';
import { bucketSort } from './algorithms/sorting/bucket-sort';
import { countingSort } from './algorithms/sorting/counting-sort';
import heapSort from './algorithms/sorting/heap-sort';
import { insertionSort } from './algorithms/sorting/insertion-sort';
import { mergeSort } from './algorithms/sorting/merge-sort';
import { quickSort } from './algorithms/sorting/quicksort';
import { radixSort } from './algorithms/sorting/radix-sort';
import { selectionSort } from './algorithms/sorting/selection-sort';
import BinarySearchTree from './data-structures/binary-search-tree';
import Deque from './data-structures/deque';
import Dictionary from './data-structures/dictionary';
import Graph from './data-structures/graph';
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

// let heap = new MinHeap();
// heap.insert(2);
// heap.insert(3);
// heap.insert(4);
// heap.insert(5);
// heap.insert(1);

// console.log('Heap size: ', heap.size());
// console.log('Heap is empty: ', heap.isEmpty());
// console.log('Heap min value: ', heap.findMinimum());


// heap = new MinHeap();
// for(let i = 1; i < 10; i++) {
//   heap.insert(i);
// }
// console.log('Extract minimum: ', heap.extract());

// const maxHeap = new MaxHeap();
// maxHeap.insert(2);
// maxHeap.insert(3);
// maxHeap.insert(4);
// maxHeap.insert(5);
// maxHeap.insert(1);
// console.log('Heap size: ', maxHeap.size());
// console.log('Heap min value: ', maxHeap.findMinimum());


// const array = [7, 6, 3, 5, 4, 1, 2];
// console.log('before sorting: ', array);
// console.log('after sorting: ', heapSort(array));

// let graph = new Graph();
// let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
// for(let i = 0; i < myVertices.length; i++) {
//   graph.addVertex(myVertices[i]);
// }
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');

// console.log('********* printing graph ***********');

// console.log(graph.toString());

// console.log('********* bfs with callback ***********');

// const printVertex = value => console.log('Visited vertex: ' + value);

// breadthFirstSearch(graph, myVertices[0], printVertex);

// console.log('********* sorthest path - BFS ***********');
// const shortestPathA = BFS(graph, myVertices[0]);
// console.log(shortestPathA.distances);
// console.log(shortestPathA.predecessors);

// // from A to All other vertices
// const fromVertex = myVertices[0];

// for (let i = 1; i < myVertices.length; i++) {
//   const toVertex = myVertices[i];
//   const path = new Stack();
//   for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
//     path.push(v);
//   }
//   path.push(fromVertex);
//   let s = path.pop();
//   while (!path.isEmpty()) {
//     s += ' - ' + path.pop();
//   }
//   console.log(s);
// }


// console.log('********* dfs with callback ***********');

// depthFirstSearch(graph, printVertex);


// console.log('********* topological sort - DFS ***********');

// graph = new Graph(true); // directed graph

// myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
// for (let i = 0; i < myVertices.length; i++) {
//   graph.addVertex(myVertices[i]);
// }
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('B', 'D');
// graph.addEdge('B', 'E');
// graph.addEdge('C', 'F');
// graph.addEdge('F', 'E');

// const result = DFS(graph);
// console.log('discovery', result.discovery);
// console.log('finished', result.finished);
// console.log('predecessors', result.predecessors);

// const fTimes = result.finished;
// let s = '';
// for (let count = 0; count < myVertices.length; count++) {
//   let max = 0;
//   let maxName = null;
//   for (let i = 0; i < myVertices.length; i++) {
//     if (fTimes[myVertices[i]] > max) {
//       max = fTimes[myVertices[i]];
//       maxName = myVertices[i];
//     }
//   }
//   s += ' - ' + maxName;
//   delete fTimes[maxName];
// }
// console.log(s);


// const graph = [
//   [0, 2, 4, 0, 0, 0],
//   [0, 0, 2, 4, 2, 0],
//   [0, 0, 0, 0, 3, 0],
//   [0, 0, 0, 0, 0, 2],
//   [0, 0, 0, 3, 0, 2],
//   [0, 0, 0, 0, 0, 0]
// ];

// console.log("********* Dijkstra's Algorithm - Shortest Path ***********");

// var dist = dijkstra(graph, 0);

// for (let i = 0; i < dist.length; i++){
//     console.log(i + '\t\t' + dist[i]);
// }

// console.log('********* Floyd-Warshall Algorithm - All-Pairs Shortest Path ***********');

// const INF = Infinity;
// const graph = [
//   [INF, 2, 4, INF, INF, INF],
//   [INF, INF, 2, 4, 2, INF],
//   [INF, INF, INF, INF, 3, INF],
//   [INF, INF, INF, INF, INF, 2],
//   [INF, INF, INF, 3, INF, 2],
//   [INF, INF, INF, INF, INF, INF]
// ];

// const dist = floydWarshall(graph);

// let s = '';
// for (let i = 0; i < dist.length; ++i) {
//   s = '';
//   for (var j = 0; j < dist.length; ++j) {
//     if (dist[i][j] === INF) s += 'INF ';
//     else s += dist[i][j] + '   ';
//   }
//   console.log(s);
// }

// const graph = [
//   [0, 2, 4, 0, 0, 0],
//   [2, 0, 2, 4, 2, 0],
//   [4, 2, 0, 0, 3, 0],
//   [0, 4, 0, 0, 3, 2],
//   [0, 2, 3, 3, 0, 2],
//   [0, 0, 0, 2, 2, 0]
// ];

// console.log("********* Prim's Algorithm - Minimum Spanning Tree ***********");

// let parent = prim(graph);

// console.log('Edge   Weight');
// for (let i = 1; i < graph.length; i++) {
//   console.log(parent[i] + ' - ' + i + '   ' + graph[i][parent[i]]);
// }

// console.log('********* Kruskal Algorithm - Minimum Spanning Tree ***********');

// parent = kruskal(graph);

// console.log('Edge   Weight');
// for (let i = 1; i < graph.length; i++) {
//   console.log(parent[i] + ' - ' + i + '   ' + graph[i][parent[i]]);
// }

function createNonSortedArray(size) {
  const array = [];
  for(let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

let array = createNonSortedArray(5);
console.log(array.join());
// array = bubbleSort(array);
// console.log(array.join());

// array = selectionSort(array);
// console.log(array.join());

// array = insertionSort(array);
// console.log(array.join());

// array = mergeSort(array);
// console.log(array.join());

// array = quickSort(array);
// console.log(array.join());

// array = countingSort(array);
// console.log(array.join());

// array = bucketSort(array);
// console.log(array.join());

// array = radixSort(array);
// console.log(array.join());

const arr = [3, 1, 8, 8, 4, 10, 5, 8, 6, 5, 7, 6, 10];

let hashMap = {};

let maxElement = Number.MIN_VALUE;
let oldElement = Number.MIN_VALUE;

for(let i = 0; i < arr.length; i++) {
  const key = arr[i];
  const total = hashMap[key] == null ? 1 : hashMap[key] + 1;
  hashMap[key] = total;

  if(maxElement === key && total > 1) {
    maxElement = oldElement;
  }

  if(total === 1 && key > maxElement) {
    oldElement = maxElement;
    maxElement = key;
  }
}

console.log(hashMap);
console.log(maxElement)
