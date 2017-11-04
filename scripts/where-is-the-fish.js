$(document).ready(function() {
  $('main').append("<table id='board'></table>");

  // boardWidth must be odd for board to be checkered
  var boardWidth = 7;
  var boardHeight = 7;
  var cellTotal = 1;
  var secretCell = Math.floor(Math.random() * boardWidth * boardHeight);

  // populate table
  for (var i = 0; i < boardHeight; i++) {
    var row = $("<tr></tr>");

    for (var j = 0; j < boardWidth; j++) {
      var cellClass = cellTotal % 2 === 0 ? "even" : "odd";
      var cell = $("<td></td>").addClass(cellClass);
      if (cellTotal === secretCell) { cell.attr('id', 'secret-salmon-cell'); }

      row.append(cell);
      cellTotal ++;
    }
    $('#board').append(row);
  }

  // keep track of user guesses
  var guesses = 0;
  var game_over = false;

  // change cell colors as the user clicks
  $('td').click(function() {
    $(this).addClass('clicked');
    guesses ++;
  });

  // reveal the secret salmon when its location is clicked
  $("td#secret-salmon-cell").click(function() {
    if (!game_over) {
      $("td#secret-salmon-cell").html("<img src=\"assets/salmon.png\" alt\"salmon icon\"/>");

      // tell the user they won and how many tries it took
      $('table').after("<h3>You found the fish! Took ya " + guesses + " tries...</h3>");

      game_over = true;  
    }
  });

});
