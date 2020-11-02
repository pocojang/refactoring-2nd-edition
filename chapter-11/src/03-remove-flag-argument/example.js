/**
 * 리팩토링 전
 */
function setDimension(name, value) {
  if (name === 'height') {
    this._height = value;

    return;
  }

  if (name === 'width') {
    this._width = value;

    return;
  }
}

/**
 * 리팩토링 후
 */
function setHeight(value) {
  this._height = value;
}

function setWidth(value) {
  this._width = value;
}
