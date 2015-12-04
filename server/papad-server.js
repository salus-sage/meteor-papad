
Meteor.methods({
    addTags: function(text, id) {
        Files.update({_id: id},
                {$addToSet:{comments : { "text" : text, "username" : Meteor.user().profile.name,
                                          "userId":Meteor.userId, "createdAt" : new Date(), "tags" : [] }}
                });
        console.log(id, text);
    },
    writeFile: function(file) {
        var fs = Npm.require('fs');
        __ROOT_APP_PATH__ = process.env.PWD;//fs.realpathSync('.');
        fs.writeFileSync( __ROOT_APP_PATH__+"/uploads" , file);
        console.log(__ROOT_APP_PATH__, file);
    }
});
Meteor.publish("stations", function() {
    return Stations.find({});
});
Meteor.publish("activity", function(id) {
    var files = Activity.find({"fileID": id});
    return files;
});
    Meteor.publish("Files", function(){
        return Files.find({}, {sort: {uploadedAt:-1}});
    });
/*Meteor.publish("files-by-station", function(name) {
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


