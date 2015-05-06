var airLine = angular.module('airLine', ['ui.router', 'firebase']);

airLine.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html",
        controller: 'FormCtrl'
    });

    $stateProvider.state('guests', {
        url: "/guests_info",
        templateUrl: "partials/guests.html",
        controller: 'FormCtrl'
    });
});



// airLine.directive("guest", function() {
//     return {
//         restrict: "E",
//         scope: {
//             count: _______
//         },
//         template: '<input type="text" ng-model="guestnumber"' + ' {{guestnumber}}' + '<div class="button" ng-click="count({})">Submit</div>'
//     };
// });
