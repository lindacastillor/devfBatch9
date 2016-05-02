/* IIFE */
(function (){
    'use strict'

    var card = {
        controller : cardController,
        template : `
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
    `
    };

    function cardController(superheroSearch) {
        var card = this;



        //card.jsonvar = [
            //{
                //"title" : "Hola mundo",
                //"slug" : "Este es un slug",
                //"src" : "http://lorempixel.com/580/250/nature/1"
            //},
            //{
                //"title" : "Hola mundo",
                //"slug" : "Este es un slug",
                //"src" : "http://lorempixel.com/580/250/nature/2"
            //},
            //{
                //"title" : "Hola mundo",
                //"slug" : "Este es un slug",
                //"src" : "http://lorempixel.com/580/250/nature/3"
            //},
            //{
                //"title" : "Hola mundo",
                //"slug" : "Este es un slug",
                //"src" : "http://lorempixel.com/580/250/nature/4"
            //},
            //{
                //"title" : "Hola mundo",
                //"slug" : "Este es un slug",
                //"src" : "http://lorempixel.com/580/250/nature/5"
            //},
            //{
                //"title" : "Hola mundo",
                //"slug" : "Este es un slug",
                //"src" : "http://lorempixel.com/580/250/nature/6"
            //}
        //];
    };

    angular
        .module('tarea')
        .component('card',card);
})();