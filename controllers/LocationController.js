airLine.controller("LocationCtrl", function LocationCtrl ($scope, $stateParams, LocationFactory) {
    $scope.departures = LocationFactory.departures;
    $scope.destinations = LocationFactory.destinations;
    $scope.LocationFactory = LocationFactory;

});
