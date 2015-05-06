airLine.controller("LocationCtrl", function LocationCtrl ($scope, $stateParams, LocationFactory) {
    $scope.departures = LocationFactory.departures;
    $scope.destinations = LocationFactory.destinations;
    $scope.LocationFactory = LocationFactory;

});


//Firebase codes: console said does not understand the "ref.child"
// var ref = new Firebase("https://airline.firebaseio.com/");
//
// // var syncObject = $firebaseObject(ref);
//
// $scope.departure = $firebaseObject(ref.child('airline').child('departures'));
//
// // syncObject.$bindTo($scope, "airline");
// //
// // var departure = $firebaseObject(syncObject.child('airline').child('departures'));
//
//
// // $scope.addTrip = function() {
// //  var newguest = $scope.newguest;
// //  var newlocation = $scope.newlocation;
// //  var newdesination =  $scope.newdestination;
// //
// //   $scope.sync.$add(
// //     {
// //     guest:
// //     location:
// //     destination:
// //     });
// // }
