// 클라이언트 1
const aCustomer = site.customer;
// ...some code

let customerName;

if (aCustomer === '미확인 고객') {
  customerName = '거주자';
} else {
  customerName = aCustomer.name;
}

// 클라이언트 2
const plan =
  aCustomer === '미확인 고객'
    ? registry.billingPlans.basic
    : aCustomer.billingPlan;

// 클라이언트 3
if (aCustomer !== '미확인 고객') {
  aCustomer.billingPlan = newPlan;
}

// 클라이언트 4
const weeksDelinquent =
  aCustomer === '미확인 고객'
    ? 0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;
