class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get isAdvanced() {
    return this._isAdvanced;
  }
}
