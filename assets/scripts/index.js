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
  pX: 0,
  pO: 0,
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

// Checking winner or Tie

let checkWinner = function() {
  if(checkRow() || checkCol() || checkDiag()) {

    winner = move;
    console.log('Winner!!!');
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

// Game Interactions

  let gameTxt = function() {
    if(checkWinner()) {
      $message.text('Yahoo! ' + winner + ' wins the game!' );
    }
    else {
      switchMove();
      $message.text('It is now ' + move + '\'s turn.');
    }
};

let score = function() {
  if(findTie()) {
    count.tie += 1;
    $('.tie').append(count.tie);
  }
  else if(move === 'O') {
    count.pO += 1;
    $('.pO').append(count.pO);
  }
  else if(move === 'X') {
    count.pX += 1;
    $('.pX').append(count.pX);
  }
};


let makeMove = function() {
  $allbx.on('click', function() {
    if(checkWinner() || findTie()) {
      score();
      $allbx.text('');
      switchMove();
      $message.text('New Game! ' + move + ' goes first.');
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
});
