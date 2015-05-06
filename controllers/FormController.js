airLine.controller("FormController",
  ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var database = new Firebase("https://airline.firebaseio.com/");

    $scope.sync = $firebaseArray(database);
    //
    // $scope.addTrip = function() {
    //  var newguest = $scope.newguest;
    //  var newlocation = $scope.newlocation;
    //  var newdesination =  $scope.newdestination;
    //
    //   $scope.sync.$add(
    //     {
    //     guest:
    //     location:
    //     destination:
    //     });
    // }
  }
]);
