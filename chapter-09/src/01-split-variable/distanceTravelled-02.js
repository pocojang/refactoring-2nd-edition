function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도 (a) = 힘(F) / 질량(m)
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
  let secondaryTime = time - scenario.delay;

  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    let primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;

    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }

  return result;
}
