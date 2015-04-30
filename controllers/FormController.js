airLine.controller('FormCtrl', function FormCtrl($scope, TripFactory) {
    $scope.tripInfo = TripFactory.tripInfo;
    $scope.TripFactory = TripFactory;

    $scope.tripInfo.guest = "1 Adult";

    $scope.addGuest = function() {
        var count = $scope.count;
        $scope.TripFactory.addGuest(count);
    };

});
