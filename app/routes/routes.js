(function() {
    'use strict'

    angular
        .module('marvel')
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when(
                '/',
                {
                    //template : '<card></card>'
                    template : ''
                }
            )
            .when(
                '/character/detail/:id',
                {
                    template : '<detail></detail>'
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