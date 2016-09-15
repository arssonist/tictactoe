

var turn = 0;



$(document).ready (function() {

// this refers to class/element/id above
  $('td').click(function(){

    if ($(this).text() === '') {
      if(turn % 2 === 0){
        $(this).text('X');
      } else {
        $(this).text('0');
      }
    }
    checkWin();
    turn++;
  });
});

// if ($(.column1).text() === 'X'){alert('x wins')};
// diaganol 1
function checkWin(){
  // check for x win
  if (($('.column1').text() === 'XXX') ||
    ($('.column2').text() === 'XXX') ||
    ($('.column3').text() === 'XXX') ||
    ($('.row1 td').text() === 'XXX') ||
    ($('.row2 td').text() === 'XXX') ||
    ($('.row3 td').text() === 'XXX') ||
    (($('#c1r1').text() === 'X') &&          ($('#c2r2').text() === 'X') &&   ($('#c3r3').text() === 'X')) ||
    (($('#c3r1').text() === 'X') &&
    ($('#c2r2').text() === 'X') &&
    ($('#c3r1').text() === 'X'))
  )
  {
    alert('X wins')
  }
  // check for 0 wins (zero only!)
  if (($('.column1').text() === '000') ||
    ($('.column2').text() === '000') ||
    ($('.column3').text() === '000') ||
    ($('.row1 td').text() === '000') ||
    ($('.row2 td').text() === '000') ||
    ($('.row3 td').text() === '000') ||
    (($('#c1r1').text() === '0') &&          ($('#c2r2').text() === '0') &&   ($('#c3r3').text() === '0')) ||
    (($('#c3r1').text() === '0') &&
    ($('#c2r2').text() === '0') &&
    ($('#c3r1').text() === '0')))
    {
      alert ('0 wins')
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
