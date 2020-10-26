// 클라이언트 1
const customerName = aCustomer.name;

// 클라이언트 2
const plan = isUnknown(aCustomer)
  ? registry.billingPlans.basic
  : aCustomer.billingPlan;

// 클라이언트 3
if (!isUnknown(aCustomer)) {
  aCustomer.billingPlan = newPlan;
}

// 클라이언트 4
const weeksDelinquent = isUnknown(aCustomer)
  ? 0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear;
