function createUnknownCustomer() {
  return {
    isUnknown: true,
    name: '거주자',
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };
}
