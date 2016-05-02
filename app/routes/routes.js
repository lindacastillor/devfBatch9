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
                    template : '<card></card>'
                }
            )
            .when(
                '/contact',
                {
                    template : `<h2>Contact</h2>`
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