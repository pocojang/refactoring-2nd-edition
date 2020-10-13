/**
 * 리팩토링 전
 */
let temp = 2 * (height + width);
console.log(temp);
temp = height + width;
console.log(temp);

/**
 * 리팩토링 후
 */
const perimeter = 2 * (height + width);
console.log(perimeter);

const area = height * width;
console.log(area);
