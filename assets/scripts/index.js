'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');


let move;
let message = $('.message');
let winner;

let gameStart = function() {
  console.log('test');
  move = 'X';
  message.text('Let\'s start the game with ' + move + '\'s turn.');
  return move;
};


// checking for answer.

let box = function(num) {
  return $('.pos' + num);
};

let check = function(a, b, c) {
  if(box(a).text() === move && box(b).text() === move && box(c).text() === move) {
  return true;
  }
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
  if(check(1, 5, 9) || check(3, 5, 9)) {
    return true;
  }

  return false;
};

let checkWinner = function() {
  if(checkRow() || checkCol() || checkDiag()) {
    message.text('The winner is ' + move);
    return true;
  }
  return false;
};

// Moves portion

let switchMove = function() {
  if()
  if (move === 'X') {
    move = 'O';
    return move;
  } else if (move === 'O') {
    move = 'X';
  }
  message.text('It is ' + move + '\'s turn');
};

let makeMove = function() {
  $('.box').on('click', function() {
    if ($(this).text() === '') {
      $(this).text(move);
      checkWinner();
      switchMove();

    } else {
      message.text('Sorry that square is taken.');
    }
  });

};



$(document).ready(() => {
  gameStart();
  makeMove();
});
