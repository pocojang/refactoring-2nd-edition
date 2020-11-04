class HeatingPlan {
  get targetTemperature(aPlan) {
    if (thermostat.selectedTemperature > this._max) {
      return this._max;
    } else if (thermostat.selectedTemperature < this._min) {
      return this._min;
    } else {
      return thermostat.selectedTemperature;
    }
  }
}

if (thePlan.targetTemperature > thermostat.currentTemperature) {
  setToHeat();
} else if (thePlan.targetTemperature < thermostat.currentTemperature) {
  setToCool();
} else {
  setOff();
}
