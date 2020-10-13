/**
 * 예시: 입력 매개변수의 값을 수정할 때
 */
function discount(inputValue, quantity) {
  let result = inputValue;

  if (inputValue > 50) {
    result = result - 2;
  }

  if (quantity > 100) {
    result = result - 1;
  }

  return result;
}
