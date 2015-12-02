Stations = new Mongo.Collection("stations");
Files = new Mongo.Collection("files");
Activity = new Mongo.Collection("activity");
if (Meteor.isClient) {
    Tracker.autorun(function () {
        Meteor.subscribe("files-by-station", Session.get("stationName"));
        Meteor.subscribe("stations");
    });
    /*Meteor.methods({
        getFiles: function(station){
            var url = "http://da.pantoto.org/api/stn/"+station;
            console.log(url);
            HTTP.call('GET',url, function(error, response) {
                if(error) {
                    console.log("error");
                }
                else {
                    var files = response.data.files;
                    _.each(files, function(doc) {
                        Files.update(doc);
                    });
                    console.log("success");
                }
            });
        }
    });*/
    Template.body.helpers({
        stationName: function() {
        return Session.get("stationName").toUpperCase();
        },
        stations: function() {
            return Stations.find({});
        },
        files: function() {
            return Files.find({});

        }
    });
    Template.station.events({
        "click li": function(event) {
            event.preventDefault();
            Session.set("stationName", this.name);
        }
    });
    Template.file.events({
        "submit .input-form": function(event) {
            event.preventDefault();
            var text = event.target.text.value;
            console.log(this);
            Meteor.call("addTags", text, this._id);
            // Clear form
            event.target.text.value = "";
        }
    });
    Template.tagcloud.helpers({
        list: function() {
            var stationTags = _.chain(Files.find().fetch()).pluck("tags").flatten().uniq();
            return stationTags._wrapped;
            console.log(stationTags._wrapped);
        }
    });
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });
}
if (Meteor.isServer) {
    Meteor.methods({
        addTags: function(text, id) {
            Activity.insert({fileID: id, tags: [text], createdAt: new Date()});
            console.log(id, text);
        }
    });
    Meteor.publish("stations", function() {
        return Stations.find({});
    });
    Meteor.publish("files-by-station", function(name) {
        var self = this;
        var files = Files.find({stationName: name});
        return files;
    });
    Meteor.startup(function () {
        // code to run on server at startup

    });
}

