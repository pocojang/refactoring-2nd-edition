class Scroll extends CatalogItem {
  constructor(id, title, tags, dataLastCleaned) {
    super(id, title, tags);

    this._lastCleaned = dataLastCleaned;
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag('revered') ? 700 : 1500;

    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}
