var airLine = angular.module('airLine', ['ui.router', 'firebase']);

airLine.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/form.html",
        controller: 'LocationCtrl'
    });

    // $stateProvider.state('guests', {
    //     url: "/guests_info",
    //     templateUrl: "partials/guests.html",
    //     controller: 'FormCtrl'
    // });
});
