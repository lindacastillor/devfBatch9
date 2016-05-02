/* IIFE */
(function (){
    'use strict'

    var card = {
        controller : cardController,
        template : `

        <div class="row">

            <input type="text" ng-model="search.name"></input>
            <input type="text" ng-model="search.name"></input>

            <div class="card col s4" ng-repeat="character in $ctrl.characters | filter : search">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="http://lorempixel.com/400/200/">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{{character.name}}<i class="material-icons right">more_vert</i></span>
                    <p><a href="#">Perfil</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{{character.name}}<i class="material-icons right">close</i></span>
                    <p>{{character.description}}</p>
                </div>
            </div>

        </div>
    `
    };

    function cardController($http) {
        var card = this;

        $http
            .get(
                'http://gateway.marvel.com/v1/public/characters?apikey=30522f5854e4359b5b1e493608d5662b&ts=9&hash=0463135c2c739943d4f5f5f27dbd87f8'
            )
            .success(function (data) {
                card.jsonvar = data.data
                card.characters = data.data.results
                console.log(data.data.results);
            });
            
    };

    angular
        .module('tarea')
        .component('card',card);
})();