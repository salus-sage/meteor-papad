Template.upload.events({
        'change .myFileInput': function(event, template) {
            console.log(Files.find().fetch());
            FS.Utility.eachFile(event, function(file) {
                var file = event.target.files[0];
                if(!file) return;
                Files.insert(file, function (err, fileObj) {
                    if (err){
                        console.log(err);
                    } else {
                        console.log("success", fileObj);
                        var owner = Meteor.user().profile.name;//Meteor.userId();
                        Files.update(fileObj._id, {$set: {"owner": owner}});
                        /*var imagesURL = {
                            "profile.image": "/cfs/files/images/"+fileObj._id
                        };*/
                        console.log(fileObj);
                        //Meteor.users.update(userId, {$set: imagesURL});
                    }
                });
            });
        }
    });
