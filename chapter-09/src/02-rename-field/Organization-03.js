class Organization {
  constructor(data) {
    this._title = data.title;
    this._country = data._country;
  }

  get title() {
    return this._title;
  }

  set title(aString) {
    this._title = aString;
  }

  get country() {
    return this._country;
  }

  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
});
