'use strict';

const myApp = {
  baseUrl: 'http://tic-tac-toe.wdibos.com',
};

const gameData = {

};


let createGame = function() {
  // e.preventDefault();
  let emptyForm = new FormData();
  $.ajax({
    url: myApp.baseUrl + '/games',
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
    url: myApp.baseUrl + '/games/' + myApp.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    contentType: false,
    processData: false,
    data: emptyForm,
  }).done(function(data) {

    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};



let updateGame = function(player, index) {
  // e.preventDefault();
  $.ajax({
    url: myApp.baseUrl + '/games/' + myApp.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    contentType: false,
    processData: false,
    data: {
            "game": {
              "cell": {
                "index": index,
                "value": player
              },
              "over": false
  }
},
  }).done(function(data) {
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};




$(document).ready(() => {

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
      createGame();
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

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
      myApp.user = data.user;
      createGame();
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
});

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
    console.log(data);
    console.log(myApp);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
});

$('#change-password').on('submit', function(e) {
  e.preventDefault();
  if (!myApp.user) {
    console.error('Wrong!');
    return;
  }
  var formData = new FormData(e.target);
  $.ajax({
    url: myApp.baseUrl + '/change-password/' + myApp.user.id,
    // url: 'http://httpbin.org/post',
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



// module.exports = {
//
//   gameData,
//   joinGame,
//   updateGame
// };
