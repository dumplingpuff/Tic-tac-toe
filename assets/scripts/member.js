'use strict';

const myApp = {
  baseUrl: 'http://tic-tac-toe.wdibos.com',
};

const gameData = {

};

let createGame = function(e) {
  e.preventDefault();



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




module.exports = true;
