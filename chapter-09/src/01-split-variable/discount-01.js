/**
 * 예시: 입력 매개변수의 값을 수정할 때
 */
function discount(inputValue, quantity) {
  if (inputValue > 50) {
    inputValue = inputValue - 2;
  }

  if (quantity > 100) {
    inputValue = inputValue - 1;
  }

  return inputValue;
}
