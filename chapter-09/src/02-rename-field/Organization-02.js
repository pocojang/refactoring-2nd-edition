class Organization {
  constructor(data) {
    this._title = data.title !== undefined ? data.title : data.name;
    this._country = data._country;
  }

  get name() {
    return this._title;
  }

  set name(aString) {
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
  title: '애크미 구스베리',
  country: 'GB',
});
