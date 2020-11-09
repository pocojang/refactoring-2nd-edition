/**
 * 리팩토링 전
 */
let totalAscent = 0;
calculateAscent();

function calculateAscent() {
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;

    totalAscent += verticalChange > 0 ? verticalChange : 0;
  }
}

/**
 * 리팩토링 후
 */
const totalAscent = calculateAscent();

function calculateAscent() {
  let result = 0;

  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;

    result += verticalChange > 0 ? verticalChange : 0;
  }

  return result;
}
