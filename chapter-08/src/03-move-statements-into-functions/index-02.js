function renderPerson(outStream, person) {
  const result = [];

  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(`<p>제목: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));

  return result.join('\n');
}

function photoDiv(aPhoto) {
  return ['<div>', emitPhotoData(aPhoto), `</div>`].join('\n');
}

function emitPhotoData(aPhoto) {
  return [
    `<p>제목: ${aPhoto.title}</p>`,
    `<p>위치: ${aPhoto.location.name}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ];
}
