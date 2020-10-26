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
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

// 튀는 클라이언트
const name = !isUnknown(aCustomer) ? aCustomer.name : '미확인 거주자';

// 튀는 클라이언트 (인라인)
const name = aCustomer.isUnknown ? '미확인 거주자' : aCustomer.name;
