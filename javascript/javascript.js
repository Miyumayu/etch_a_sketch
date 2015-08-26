// Prompt user for grid size 
// create the grid size specified by the user
$(document).ready(function() {
  $('#reset').on('click', function() {
    createNew();
    chooseColor('default');
  });

  $('#randomize').on('click', function() {
    createNew();
    chooseColor('random');
  });

  $('#opacity').on('click', function() {
    createNew();
    chooseColor();
  });

  $('#trail').on('click', function() {
    createNew();
    trail();
  });

  function createNew() {
    removeGrid();
    var gridSize = prompt("Please enter a number between 1-100.");
    if (gridSize >= 1 && gridSize <= 100) {
      createGrid(gridSize);
    }
    else {
      alert("Invalid number. Please enter a number between 1-100!");
    }
  }

  function createGrid(x) {
    for (var i = 0; i < x; i++) {
      var row  = document.getElementById("gridTable").insertRow(i);
  
      for (var y = 0; y < x; y++) {
        row.insertCell(y);
      }
    }
  }

  function removeGrid() {
    $('#gridTable').remove();
    $('#container').append('<table id = "gridTable"></table>');
  }

  function chooseColor(option){
    if (option === 'default') {
      $('td').on('mouseenter', function() {
        $(this).css("background-color", "#66FFFF");
      });
    } 

    else if (option === 'random') {
      $('td').on('mouseenter', function() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        $(this).css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
      });
    }
    else {
      $('td').mouseenter(function(){
      $(this).css("opacity", $(this).css("opacity") * 0.75);
      });
    }
  }
  function trail(){
    $('td').on('mouseenter', function() {
      $(this).fadeTo(0, 0.10);
    });
    $('td').on('mouseleave', function() {
      $(this).fadeTo('slow', 1.0);
    });
  } 
});