/**
 * 리팩토링 전
 */
emitPhotoData(outStream, person.photo);

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>\n`);
  outStream.write(`<p>위치: ${photo.location}</p>\n`);
}

/**
 * 리팩토링 후
 */
emitPhotoData(outStream, person.photo);

outStream.write(`<p>위치: ${person.photo.location}</p>`);

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>`);
}
