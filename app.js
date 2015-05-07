var airLine = angular.module('airLine', ['ui.router']);

airLine.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/form.html",
        controller: 'LocationCtrl'
    });


});
