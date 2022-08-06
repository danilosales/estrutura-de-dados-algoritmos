export class Node {
  constructor(key) {
    this.key = key;
    this.next = undefined;
  }

  toString() {
    return `${this.key}`;
  }
}
