'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');


let move;
let $message = $('.message');
let $allbx = $('.box');
let winner;
let count = {
  p1: 0,
  p2: 0,
  tie: 0
};

// let player1 = {};
// let player2 = {};

let gameStart = function() {
  console.log('test');
  move = 'X';
  $message.text('Let\'s start the game with ' + move + '\'s turn.');
  return move;
};


// checking for answer.

let $box = function(num) {
  return $('.pos' + num);
};

let check = function(a, b, c) {
  if($box(a).text() === move && $box(b).text() === move && $box(c).text() === move) {
  return true;
  }
  return false;
};



let checkRow = function() {
  if(check(1, 2, 3) || check(4, 5, 6) || check(7, 8, 9)){
    return true;
  }

  return false;
};

let checkCol = function() {
  if(check(1, 4, 7) || check(2, 5, 8) || check(3, 6, 9)) {
    return true;
  }
  return false;
};

let checkDiag = function() {
  if(check(1, 5, 9) || check(3, 5, 7)) {
    return true;
  }

  return false;
};

let checkWinner = function() {
  if(checkRow() || checkCol() || checkDiag()) {
    $message.text('The winner is ' + move);
    winner = move;
    console.log('Winner!!!');
    // $('.box').hide();
    // $('.board').text(move + ' is the winner');
    return winner;
  }
  return false;
};



let findTie = function() {
  for(let i = 1; i < 10; i++) {
    if($box(i).text() === '') {
      return false;
    }
  }
  $message.text('Game is a tie!');
  console.log('it is true');
  return true;
};



// Moves portion

let switchMove = function() {
    if (move === 'X') {
      move = 'O';
      return move;
    } else if (move === 'O') {
      move = 'X';
    }
  };

  let gameTxt = function() {
    if(checkWinner()) {
      $message.text('Yahoo! ' + winner + ' wins the game');
    }
    else {
      switchMove();
      $message.text('It is now ' + move + '\'s turn.');
    }
};




let makeMove = function() {
  $allbx.on('click', function() {
    if(checkWinner() || findTie()) {
      console.log(' in it');
      $allbx.text('');
      switchMove();
      $message.text('New Game!');
    }
    else {

        if ($(this).text() === '') {
          $(this).text(move);
          gameTxt();
          findTie();
          checkWinner();


        } else {
          $message.text('Sorry that square is taken.');
        }
    }
  });
};



$(document).ready(() => {
  gameStart();
  makeMove();
  // reset();
});


// let reset = function () {
//   if(checkWinner() || findTie()) {
//     console.log('Button needs to show!!!!');
//     $('.reset').show();
//     $('.reset').on('click', function() {
//       $('.box').text('');
//     });
//   }
//     else {
//       $('.reset').hide();
//     }
// };

// I am caving to making a reset button. The original plan was to
// have the user click again to have the board reset. I had an
// issue where I put the clear above setting the text in box
// this caused everything to clear after you win everytime
// you click making it only one appear and not stick.

// let clearNPrint = function() {
//   if(checkWinner() || findTie()) {
//     $('.box').text('');
//   }
// };


// let hideNshow = function() {
//   $('.box').hide();
//   $('.board').text('Boo!');
// };
//
// let killSwitch = function() {
//   if(checkWinner() || findTie()) {
//     console.log('Tru dat');
//     $('.board').on('click', function() {
//         $('.board').text('');
//         $('.box').text('');
//         $('.box').show();
//         switchMove();
//         $message.text('New Game!!');
//         winner = '';
//
//     });
//   }
// };
//
// let show = function() {
//   $('.board').text('');
//   $('.box').show();
// };

// let boardClick = function() {
//   $('.board').on('click', function() {
//
//       $('.board').text('Tee!');
//       show();
//
//   });
// };
