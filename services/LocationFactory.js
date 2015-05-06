airLine.factory('LocationFactory', function() {
    var factory = {};
    factory.departures = [ {departure: "Austin, TX", value: 1}, {departure: "Boston, MA", value: 2}, {departure: "Cancun, (CUN)", value: 3}, {departure: "Chicago, IL", value: 4}, {departure: "Dallas, TX", value: 5}, {departure: "Portland PDX", value: 6}];

    factory.destinations = [ {destination: "Austin, TX", value: 1}, {destination: "Boston, MA", value: 2}, {destination: "Cancun, (CUN)", value: 3}, {destination: "Chicago, IL", value: 4}, {destination: "Dallas, TX", value: 5}, {destination: "Portland PDX", value: 6}];
    
    return factory;
});
