(function() {
    'use strict'

    angular
        .module('tarea', ['ngRoute']);
})();


$( document ).ready(function(){
    $(".button-collapse").sideNav();
});

$(document).ready(function(){
    $('ul.tabs').tabs();
});