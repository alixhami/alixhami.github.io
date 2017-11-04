var keysToPages = {
  h: 'index',
  a: 'about',
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
