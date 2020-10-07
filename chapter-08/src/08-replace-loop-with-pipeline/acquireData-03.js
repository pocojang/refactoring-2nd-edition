/**
 * 레이아웃 정돈
 */
function acquireData(input) {
  const lines = input.split('\n');

  return lines
    .slice(1)
    .filter((line) => line.trim !== '')
    .map((line) => line.split(','))
    .filter((record) => record[1].trim() === 'India')
    .map((record) => ({ city: record[0].trim(), phone: record[2].trim() }));
}
