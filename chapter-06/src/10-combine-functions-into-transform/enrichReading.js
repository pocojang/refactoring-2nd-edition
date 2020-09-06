function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseChage(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year),
  );

  return result;
}
