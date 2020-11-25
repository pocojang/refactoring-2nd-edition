class Scroll {
  constructor(id, title, tags, dataLastCleaned) {
    this._catalogItem = new CatalogItem(id, title, tags);
    this._lastCleaned = dataLastCleaned;
  }

  get id() {
    return this._catalogItem.id;
  }

  get title() {
    return this._catalogItem.title;
  }

  hasTag(aString) {
    return this._catalogItem.tags.hasTag(aString);
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag('revered') ? 700 : 1500;

    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}
