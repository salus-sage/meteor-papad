
if (Meteor.isClient) {
    Tracker.autorun(function () {
        //Meteor.subscribe("files-by-station", Session.get("stationName"));
        Meteor.subscribe("stations");
        Meteor.subscribe("activity");
        Meteor.subscribe("Files");
    });

    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });

}

