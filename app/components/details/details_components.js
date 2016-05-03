/* IIFE */
(function (){
    'use strict'

    var detail = {
        controller : detailController,
        template : `

        <h2>Detalle</h2>

        <hr>

        <div class="row">
            <div class="col s3">
                <div class="row">
                    <div class="col s12">
                        <div class="card">
                            <div class="card-image">
                                <!-- <img src="{{$ctrl.character.thumbnail.path}}">  -->
                                <img src="http://lorempixel.com/400/200/">
                                <span class="card-title">Card Title</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h5>{{$ctrl.character.name}}</h5>
                    <p>{{$ctrl.character.description}}</p>
                </div>
            </div>
            <div class="col s9">
                <div class="row">
                    <div class="col s12">
                        <ul class="tabs">
                            <li class="tab col s3"><a class="active" href="#tab_1">Comics</a></li>
                            <li class="tab col s3"><a href="#tab_2">Series</a></li>
                            <li class="tab col s3"><a href="#tab_3">Historias</a></li>
                            <li class="tab col s3"><a href="#tab_4">Eventos</a></li>
                        </ul>
                    </div>
                    <div id="tab_1" class="col s12">
                        <input type="text" placeholder="Buscar" ng-model="search_comic.name" />
                        <ul class="collection">
                            <li class="collection-item" ng-repeat=" comic in $ctrl.character.comics.items | filter : search_comic">
                                {{comic.name}}
                            </li>
                        </ul>
                    </div>
                    <div id="tab_2" class="col s12">
                        <input type="text" placeholder="Buscar" ng-model="search_serie.name" />
                        <ul class="collection">
                            <li class="collection-item" ng-repeat=" serie in $ctrl.character.series.items | filter : search_serie ">
                                {{serie.name}}
                            </li>
                        </ul>
                    </div>
                    <div id="tab_3" class="col s12">
                        <input type="text" placeholder="Buscar" ng-model="search_storie.name" />
                        <ul class="collection">
                            <li class="collection-item" ng-repeat=" storie in $ctrl.character.stories.items | filter : search_storie ">
                                {{storie.name}}
                            </li>
                        </ul>
                    </div>
                    <div id="tab_4" class="col s12">
                        <input type="text" placeholder="Buscar" ng-model="search_event.name" />
                        <ul class="collection">
                            <li class="collection-item" ng-repeat=" event in $ctrl.character.events.items | filter : search_event ">
                                {{event.name}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
    };

    function detailController($routeParams, $http) {
        var detail = this;

        $http
            .get(
                'http://gateway.marvel.com/v1/public/characters/'+$routeParams.id+'?apikey=30522f5854e4359b5b1e493608d5662b&ts=9&hash=0463135c2c739943d4f5f5f27dbd87f8'
            )
            .success(function (data) {
                detail.jsonvar = data.data;
                detail.character = data.data.results[0];
            });
            
    };

    angular
        .module('tarea')
        .component('detail',detail);
})();