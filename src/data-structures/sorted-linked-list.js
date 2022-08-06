import { Compare, defaultCompare, defaultEquals } from '../util';
import LinkedList from './linked-list';

export class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  insert(element, index = 0) {
    if(this.isEmpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNestSortedElement(element);
    return super.insert(element, pos);
  }

  getIndexNestSortedElement(element) {
    let current = this.head;
    let i = 0;
    for(; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if(comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}
