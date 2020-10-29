function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function baseCharge(usage) {
  if (usage < 0) {
    return usd(0);
  }

  const amount =
    withinBand(usage, 0, 100) +
    withinBand(usage, 100, 200) +
    withinBand(usage, 200, Infinity);

  return usd(amount);
}
