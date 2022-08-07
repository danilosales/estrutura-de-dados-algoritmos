import { Compare, defaultCompare } from '../util';
import BinarySearchTree from './binary-search-tree';
import RedBlackNode, { Colors } from './models/red-black-node';

export default class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if(this.root == null) {
      this.root = new RedBlackNode(key);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  insertNode(node, key) {
    if(this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if(node.left == null) {
        node.left = new RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else if(node.right == null) {
      node.right = new RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    } else {
      return this.insertNode(node.right, key);
    }
  }

  fixTreeProperties(node) {
    while(node && node.parent && node.parent.color.isRed()
      && node.color !== Colors.BLACK)  {
        let parent = node.parent;
        const grandParent = parent.parent;

        // case A: the parent is a left child
        if(grandParent && grandParent.left === parent) {
          const uncle = grandParent.right;

          // case A1: uncle of node is also red - only recoloring
          if(uncle && uncle.color === Colors.RED) {
            grandParent.color = Colors.RED;
            parent.color = Colors.BLACK;
            uncle.color = Colors.BLACK;
            node = grandParent;
          } else {
            // case A2: node is right child - left rotate
            if(node === parent.right) {
              this.rotationRR(parent);
              node = parent;
              parent = node.parent;
            }

            // case A3: node is left child - right rotate
            this.rotationLL(grandParent);
            //swap color
            parent.color = Colors.BLACK;
            grandParent.color = Colors.RED;
            node = parent;
          }
        } else { // Case B: parent is right child of grande parent
          const uncle = grandParent.left;

          // case B1: uncle of node is also red - only recoloring
          if(uncle && uncle.color === Colors.RED) {
            grandParent.color = Colors.RED;
            parent.color = Colors.BLACK;
            uncle.color = Colors.BLACK;
            node = grandParent;
          } else {
            // case B2: node is left child - right rotate
            if(node === parent.left) {
              this.rotationLL(parent);
              node = parent;
              parent = node.parent;
            }

            // case B3: node is right child - left rotate
            this.rotationRR(grandParent);
            parent.color = Colors.BLACK;
            grandParent.color = Colors.RED;
            node = parent;
          }
        }
    }
    this.root.color = Colors.BLACK;
  }

  rotationLL(node) {
    const tmp = node.left;
    node.left = tmp.right;
    if(tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if(!node.parent) {
      this.root = tmp;
    } else {
      if(node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  }

  rotationRR(node) {
    const tmp = node.right;
    node.right = tmp.left;
    if(tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if(!node.parent) {
      this.root = tmp;
    } else {
      if(node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  }
}
