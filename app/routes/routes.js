(function() {
    'use strict'

    angular
        .module('tarea')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when(
                '/',
                {
                    template : `<h1>Inicio</h1>`
                }
            )
            .when(
                '/contact',
                {
                    template : `<h2>Contacto</h2>`
                }
            )
            .when(
                '/product',
                {
                    template : `<h2>Producto</h2>`
                }
            )
            .otherwise(
                {
                    redirectTo : '/'
                }
            )
    }
})();