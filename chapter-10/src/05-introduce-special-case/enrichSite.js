/**
 * 예시: 변환 함수 이용하기
 */
function enrichSite(aSite) {
  const result = _.cloneDeep(aSite);
  const unknownCustomer = {
    isUnknown: true,
    name: '거주자',
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };

  if (isUnknown(result.customer)) {
    result.customer = unknownCustomer;
  } else {
    result.customer.isUnknown = false;
  }

  return result;
}
