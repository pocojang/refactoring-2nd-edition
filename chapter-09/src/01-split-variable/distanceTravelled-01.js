function distanceTravelled(scenario, time) {
  let result;
  let acc = scenario.primaryForce / scenario.mass; // 가속도 (a) = 힘(F) / 질량(m)
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * acc * primaryTime * primaryTime; // 전파된 거리
  let secondaryTime = time - scenario.delay;

  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    let primaryVelocity = acc * scenario.delay;
    acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;

    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime;
  }

  return result;
}
