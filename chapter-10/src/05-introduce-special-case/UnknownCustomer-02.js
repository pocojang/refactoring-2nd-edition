class UnknownCustomer {
  get name() {
    return '거주자';
  }

  get isUnknown() {
    return true;
  }

  get paymentHistory() {
    return new NullPaymentHistory();
  }
}
