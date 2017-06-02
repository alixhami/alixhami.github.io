var keysToPages = {
  h: 'index',
  a: 'about',
  r: 'resume',
  w: 'where-is-the-fish'
};

$(document).ready(function () {
  $('body').keydown(function (event) {
    var keyPressed = event.key.toLowerCase();
    var newLocation = keysToPages[keyPressed];

    if (newLocation) {
      window.location.href = newLocation + '.html';
    }
  });
});
