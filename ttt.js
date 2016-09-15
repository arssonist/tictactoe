

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
    checkWin();
    turn++;
  });
});

// if ($(.column1).text() === 'X'){alert('x wins')};
// diaganol 1
function checkWin(){

  if (($('.column1').text() === 'XXX') ||
    ($('.column2').text() === 'XXX') ||
    ($('.column3').text() === 'XXX') ||
  (($('#c1r1').text() === 'X') &&                   ($('#c2r2').text() === 'X') && ($('#c3r3').text() === 'X')))
  {alert('X wins')
  }
}

// {
//   alert('X wins')
// };

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
  //
  // if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
