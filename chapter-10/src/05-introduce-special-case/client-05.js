/**
 * 예시: 변환 함수 이용하기
 */

// 클라이언트 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;

// ...some code

const customerName = aCustomer.name;

// 클라이언트 2
const plan = aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
