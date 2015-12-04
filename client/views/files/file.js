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
