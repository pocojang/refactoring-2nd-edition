monthCharge = charge(customer, usage, provider);

function charge(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;

  return baseCharge * provider.connectionCharge;
}
