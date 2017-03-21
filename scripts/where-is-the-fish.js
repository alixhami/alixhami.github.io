$(document).ready(function() {
  table = "<table>";
  // boardWidth must be odd for board to be checkered
  boardWidth = 7;
  boardHeight = 7;
  cellTotal = 1;
  secretCell = Math.floor(Math.random() * boardWidth * boardHeight);

  // generate table
  for (var i = 0; i < boardHeight; i++) {
    row = "<tr>";

    for (var j = 0; j < boardWidth; j++) {
      var cellClass = cellTotal % 2 === 0 ? "even" : "odd";
      if (cellTotal === secretCell) {
        row += "<td class=\"" + cellClass + "\" id=\"secret-salmon-cell\"></td>";
      } else {
        row += "<td class=\"" + cellClass + "\"></td>";
      }

      cellTotal ++;
    }
    table += row + "</tr>";
  }
  table += "</table>";

  // insert table after game title
  $('h2').after(table);

  // keep track of user guesses
  var guesses = 0;

  // change cell colors as the user clicks
  $('.odd').click(function() {
    $(this).css("background-color", "lightgray");
    guesses ++;
  });

  $('.even').click(function() {
    $(this).css("background-color", "gray");
    guesses ++;
  });

  // reveal the secret salmon when its location is clicked
  $("td#secret-salmon-cell").click(function() {
    $("td#secret-salmon-cell").html("<img src=\"assets/salmon.png\" alt\"salmon icon\"/>");

    // tell the user they won and how many tries it took
    $('table').after("<h3>You found the fish! Took ya " + guesses + " tries...</h3>");
  });

});
