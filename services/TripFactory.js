airLine.factory('TripFactory', function() {
    var factory = {};
    factory.tripInfo = {};

    factory.addGuest = function(count) {
        // factory.tripInfo.push({guestnumber : count, from : null, to : null});
        factory.tripInfo.guestnumber = count;
    };
    return factory;
});
