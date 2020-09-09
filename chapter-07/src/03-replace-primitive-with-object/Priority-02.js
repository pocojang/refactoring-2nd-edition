class Priority {
  constructor(value) {
    if (value instanceof Priority) {
      return value;
    }

    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error(`<${value}}> is invalid for Priority`);
    }
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }

  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }

  toString() {
    return this._value;
  }

  equals(other) {
    return this._index === other._index;
  }

  higherThan(other) {
    return this._index > other._index;
  }

  lowerThan(other) {
    return this._index < other._index;
  }
}
