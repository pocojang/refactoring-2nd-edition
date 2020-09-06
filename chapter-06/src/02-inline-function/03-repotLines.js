/**
 * 리팩토링 전
 */
function reportLines(aCustomer) {
  const lines = [];

  gatherCustomerData(lines, aCustomer);

  return lines;
}

function gatherCustomerData(out, aCustomer) {
  out.push(['name', aCustomer.name]);
  out.push(['location', aCustomer.location]);
}

/**
 * 리팩토링 후 (함수 인라인하기)
 */
function reportLines(aCustomer) {
  const lines = [];

  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);

  return lines;
}
