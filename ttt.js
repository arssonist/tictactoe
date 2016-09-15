

var turn = 0;



$(document).ready (function() {

// this refers to class/element/id above
  $('td').click(function(){

    if ($(this).text() === '') {
      if(turn % 2 === 0){
        $(this).text('X');
      } else {
        $(this).text('O');
      }
    }

    $( '.column1' ).each( function() {
      
    } );



    turn++;
  });
});




// text() is empty text
// if ($('td').text() === '') {
//   $(".status").text("Hey, who turned off the lights?");
//   }
// xo_array = ["x","o","x","o","x","o","x","o","x"];
//
// $('td').click(function() {
//   if (turn % 2 === 0)
// } ##make even
// } else if  (turn % 2 === !0)
//   ## make odd
// }
//   }
