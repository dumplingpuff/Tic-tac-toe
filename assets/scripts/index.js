'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');

let move;

let message = function(msg) {
  $('.message').text(msg);
};


let gameStart = function() {
  move = 'X';
  $('.message').text('Let\'s start the game with ' + move + '\'s turn.')
};

let makeMove = function() {
  $(this).text(move)
}


$(document).ready(() => {
  console.log('It works.');
  console.log('testing for multiple')

});

$(document).ready(gameStart());
