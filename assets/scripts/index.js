'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
// load sass manifest
require('../styles/index.scss');



const myApp = {
  baseUrl: 'http://tic-tac-toe.wdibos.com',

};

let gameData = {
};
let $message = $('.message');


let getGames = function() {
  $.ajax({
    url: myApp.baseUrl +'/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    }
  }).done(function(responseBody) {
    gameData = responseBody;
    console.log(responseBody);
    $('.total').text(gameData.games.length);
  }).fail(function(requestObject) {
    console.error(requestObject);
  });
};

let createGame = function() {
  // e.preventDefault();
  let emptyForm = new FormData();
  $.ajax({
    url: myApp.baseUrl + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    contentType: false,
    processData: false,
    data: emptyForm
  }).done(function(data) {
    myApp.game = data.game;
    console.log('Game created.');
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let joinGame = function() {
  // e.preventDefault();
  let emptyForm = new FormData();
  $.ajax({
    url: myApp.baseUrl + '/games/' + myApp.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    contentType: false,
    processData: false,
    data: emptyForm,
  }).done(function(data) {
    console.log('Joined the game.');
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};


let updateGame = function() {
  console.log('starting save');
  $.ajax({
    url: myApp.baseUrl + '/games/' + myApp.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    data: {
  "game": {
    "cell": {
      "index": 0,
      "value": "x",
    },
    "over": false
  }
}
  }).done(function(data) {
    myApp.game = data.game;
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};




// ***** Sign in *******

let signUp = function() {
  $('#sign-up').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.baseUrl + '/sign-up',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      $('.modal').modal('hide');
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
};

let show = function() {
  $('.yesSign').removeClass('hide');
  $('.notSign').addClass('hide');
};

let hide = function() {
  $('.notSign').removeClass('hide');
  $('.yesSign').addClass('hide');
};

let signIn = function() {
    $('#sign-in').on('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(e.target);
      $.ajax({
        url: myApp.baseUrl + '/sign-in',
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
      }).done(function(data) {
        $('.modal').modal('hide');
        show();
        myApp.user = data.user;
        createGame();
        getGames();
        // console.log(data);
        console.log(myApp);

      }).fail(function(jqxhr) {
        console.error(jqxhr);
      });
    });
};

let signOut = function() {
  $('#sign-out').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: myApp.baseUrl + '/sign-out/' + myApp.user.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
      contentType: false,
      processData: false,
    }).done(function(data) {
      hide();
      console.log(data);
      console.log(myApp);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
};

let changePass = function() {
  $('#change-password').on('submit', function(e) {
    e.preventDefault();
    if (!myApp.user) {
      $('.modal').modal('hide');
      $message.text('You need to be signed in to change password.');
      console.error('Wrong!');
      return;
    }
    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.baseUrl + '/change-password/' + myApp.user.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      $('.modal').modal('hide');
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
};


//  ***** Game Engine *****


let move;

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
    if (!myApp.user) {
      $message.text('You need to sign in to play.');
    }
    else if(checkWinner() || findTie()) {
      score();
      createGame();
      getGames();
      $allbx.text('');
      switchMove();
      $message.text('New Game! ' + move + ' goes first.');
    }
    else {

        if ($(this).text() === '') {
          $(this).text(move);
          updateGame(move, event.target.id);
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

  signUp();
  signIn();
  signOut();
  changePass();
  gameStart();
  makeMove();
});
