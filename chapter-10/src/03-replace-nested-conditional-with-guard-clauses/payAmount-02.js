function payAmount(employee) {
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: 'SEP' };
  }

  if (employee.isRetired) {
    return { amount: 0, reasonCode: 'RET' };
  }

  return someFinalComputation();
}

function someFinalComputation() {
  return { amount: 100, reasonCode: 'OFFICE' };
}
