class TelephoneNumber {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }

  equals(other) {
    if (!(other instanceof TelephoneNumber)) {
      return false;
    }

    return this.areaCode === other.areaCode && this.number === other.number;
  }

  get areaCode() {
    return this.areaCode;
  }

  set areaCode(arg) {
    this.areaCode = arg;
  }

  get number() {
    return this.number;
  }

  set number(arg) {
    this.number = arg;
  }
}
