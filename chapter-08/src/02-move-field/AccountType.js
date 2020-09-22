class AccountType {
  constructor(nameString, interestRate) {
    this._nameString = nameString;
    this._interestRate = interestRate;
  }

  get interestRate() {
    return this._interestRate;
  }
}
