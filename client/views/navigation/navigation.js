    Template.navigation.helpers({
        stations: function() {
            return Stations.find({});
        },
        stationName: function() {
        return Session.get("stationName").toUpperCase();
        }
    });
