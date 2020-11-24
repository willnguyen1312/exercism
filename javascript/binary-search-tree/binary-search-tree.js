//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
  #data;
  #left;
  #right;

  #insertLeft(value) {
    this.#left ? this.#left.insert(value) : this.#left = new BinarySearchTree(value);
  }

  #insertRight(value) {
    this.#right ? this.#right.insert(value) : this.#right = new BinarySearchTree(value);
  }

  constructor(value) {
    this.#data = value;
  }

  get data() {
    return this.#data;
  }

  get left() {
    return this.#left;
  }

  get right() {
    return this.#right;
  }

  insert(value) {
    this.data >= value ? this.#insertLeft(value) : this.#insertRight(value);
  }

  each(iterator) {
    this.left?.each(iterator);
    iterator(this.data);
    this.right?.each(iterator);
  }
}
