/**
 * 리팩토링 전
 */
targetTemperature(aPlan);

function targetTemperature(aPlan) {
  currentTemperature = thermostat.currentTemperature;

  // 생략
}
/**
 * 리팩토링 후
 */
targetTemperature(aPlan, thermostat.currentTemperature);

function targetTemperature(aPlan, currentTemperature) {
  // 생략
}
