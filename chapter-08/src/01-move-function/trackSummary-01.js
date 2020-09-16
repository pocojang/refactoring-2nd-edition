function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;

  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  };

  // 총 거리 계산
  function calculateDistance() {
    let result = 0;

    for (let i = 0; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }

    return result;
  }

  // 두 지점의 거리 계산
  function distance(p1, p2) {}

  // 라디안 값으로 변환
  function radians(degrees) {}

  // 총 시간 계산
  function calculateTime(params) {}
}
