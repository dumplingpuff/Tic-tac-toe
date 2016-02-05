'use strict';

require('./member');

const gameData = {

};

let createGame = function(e) {
  e.preventDefault();
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
};
