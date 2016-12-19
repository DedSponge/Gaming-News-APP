var app = angular.module("twitterApp", ["ngRoute", "ngTweets"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./Partials/main.html"
    })
    .when("/nintendo", {
        templateUrl : "./Partials/Nintendo.html",
        controller:"nintendoCTRL"
    })
    .when("/microsoft", {
        templateUrl : "./Partials/Microsoft.html",
        controller:"microsoftCTRL"
    })
    .when("/playstation", {
        templateUrl : "./Partials/Playstation.html",
        controller:"playstationCTRL"
    });
});

app.controller("nintendoCTRL",function($scope, $http, tweets){
    tweets.get({
        widgetId:'810657865815965703'
    }).success(function(data){
        $scope.feed = data;
        console.log(data);
    });


    // 810657865815965703 widget id nintendo
    // $http.get('https://api.edamam.com/search?q='+ $('#search').val() +'&app_id=bf6e0269&app_key=73741b411564e08f84adba4e20fd6a0e')
    //     .then(function(recipeJSON){
    //         // $("#listArea").append(recipeJSON.data.hits[0].recipe.label);
    //         $scope.recipes = recipeJSON.data.hits;
    //         console.log(recipeJSON.data.hits[0].recipe);
    //     });
    });

app.controller("microsoftCTRL",function($scope, $http, tweets){

});

app.controller("playstationCTRL",function($scope, $http, tweets){

});