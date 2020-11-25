/**
 * 리팩토링 전
 */
class List {}

class Stack extends List {}

/**
 * 리팩토링 후
 */
class Stack {
  constructor() {
    this._storage = new List();
  }
}

class List {}
