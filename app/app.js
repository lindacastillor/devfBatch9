(function() {
    'use strict'

    angular
        .module('tarea', ['ngRoute'])
        .factory('superheroSearch', superheroSearch);


    superheroSearch.$inject = ['$resource'];

    function superheroSearch($resource) {
        return $resource(
            "http://gateway.marvel.com/v1/public/characters?apikey=30522f5854e4359b5b1e493608d5662b&ts=9&hash=0463135c2c739943d4f5f5f27dbd87f8"
            , {}
            , {
                get : {
                    method: 'GET',
                    headers: {  }
                }
            }
        );
    }
})();