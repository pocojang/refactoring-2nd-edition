/**
 * 리팩토링 전
 */
let tpHd = 'untitled';
let result;

result += `<h1>${tpHd}</h1>`;

setTitle(obj['articleTitle']);

/**
 * 리팩토링 후
 */
let result;

result += `<h1>${title()}</h1>`;

setTitle(obj['articleTitle']);

function title() {
  return title;
}

function setTitle(arg) {
  _title = arg;
}
