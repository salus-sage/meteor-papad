Template.navigation.helpers({
    stations: function() {
        return Stations.find({});
        console.log(Meteor.users.find().fetch());
        //return Meteor.users.find({});
    },
    stationName: function() {
        return Session.get("stationName").toUpperCase();
    }
});
