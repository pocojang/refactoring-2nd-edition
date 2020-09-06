/**
 * 리팩토링 전
 */
function isNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

const newEnglanders = someCustomers.filter((c) => isNewEngland(c));

/**
 * 매개변수를 속성으로 바꾸기
 */
function isNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

const newEnglanders = someCustomers.filter((c) =>
  isNewEngland(c.address.state),
);
