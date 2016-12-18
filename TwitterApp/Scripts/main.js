var app = angular.module("twitterApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./Partials/main.html"
    })
    .when("/nintendo", {
        templateUrl : "./Partials/Nintendo.html"
    })
    .when("/microsoft", {
        templateUrl : "./Partials/Microsoft.html"
    })
    .when("/playstation", {
        templateUrl : "./Partials/Playstation.html"
    });
});