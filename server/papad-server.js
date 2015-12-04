Meteor.publish("Files", function(){
    return Files.find({}, {sort: {uploadedAt:-1}});
});
Meteor.publish("allUsers", function(){
    return Meteor.users.find({});
});
/*Meteor.publish("stations", function() {
  return Stations.find({});
  });
  Meteor.publish("activity", function(id) {
  var files = Activity.find({"fileID": id});
  return files;
  });
  Meteor.publish("files-by-station", function(name) {
  var self = this;
  var files = Files.find({stationName: name});
  return files;
  });*/
Meteor.startup(function () {
    // code to run on server at startup
    Files.allow({
        insert: function(){
            return true;
        },
        update: function(){
            return true;
        },
        remove: function(){
            return true;
        },
        download: function(){
            return true;
        }
    });
});
