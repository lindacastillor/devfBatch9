(function() {
    'use strict';

    angular
        .module("marvel")
        .factory('apiMarvel', apiMarvel );

    apiMarvel.$inject = ['$resource'];

    function apiMarvel($resource){
        var apiKey = '30522f5854e4359b5b1e493608d5662b';
        var hash = '0463135c2c739943d4f5f5f27dbd87f8';
        var ts = "9";
        return $resource("http://gateway.marvel.com/v1/public/characters?apikey=" + apiKey + "&ts=" + ts + "&hash=" + hash);
    }
    
})();