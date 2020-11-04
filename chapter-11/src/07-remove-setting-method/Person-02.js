class Person {
  constructor(id) {
    this._id = id;
  }
  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  get id() {
    return this._id;
  }
}
