/**
 * 리팩토링 전
 */
if (aCustomer === '미확인 고객') {
  customerName = '거주자';
}

/**
 * 리팩토링 후
 */
class UnknownCustomer {
  get name() {
    return '거주자';
  }
}
