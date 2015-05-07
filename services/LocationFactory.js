airLine.factory('LocationFactory', function() {
    var factory = {};
    factory.guests = [{guest: "Adult", num: "0" , id: 1}, {guest: "Child (Age 2-14)", num: "0" , id: 2}, {guest: "Lap Infant (Age 0-2)", num: "0" , id: 3},{guest: "Pet", num: "0", id: 4}];

    factory.departures = [ {departure: "Austin, TX", id: 1}, {departure: "Boston, MA", id: 2}, {departure: "Cancun, (CUN)", id: 3}, {departure: "Chicago, IL", id: 4}, {departure: "Dallas, TX", id: 5}, {departure: "Portland PDX", id: 6}];

    factory.destinations = [ {destination: "Austin, TX", id: 1}, {destination: "Boston, MA", id: 2}, {destination: "Cancun, (CUN)", id: 3}, {destination: "Chicago, IL", id: 4}, {destination: "Dallas, TX", id: 5}, {destination: "Portland PDX", id: 6}];

    return factory;
});
