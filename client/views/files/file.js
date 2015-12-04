Template.file.events({
    "submit .input-form": function(event) {
        event.preventDefault();
        var text = event.target.text.value;
        console.log(this);
        if(Meteor.userId) {
            if(text) {
                var userActivity = {
                    "text" : text,
                    "username" : Meteor.user().profile.name,
                    "userId":Meteor.userId,
                    "createdAt" : new Date(), 
                    "tags" : []
                };
                Files.update({_id: this._id}, {$addToSet:{comments : userActivity}});
            }
            else {
                console.log("empty submit not allowed");
            }
        }
        else {
            console.log("not signed in");
        }
        // Clear form
        event.target.text.value = "";
    }
});
