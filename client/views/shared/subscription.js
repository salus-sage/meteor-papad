Tracker.autorun(function () {
    //Meteor.subscribe("files-by-station", Session.get("stationName"));
    //Meteor.subscribe("stations");
    //Meteor.subscribe("activity");
    Meteor.subscribe("Files");
    Meteor.subscribe("allUsers");
});

Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});
