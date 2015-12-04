Router.map(function() {
    this.route("/",{
        waitOn: function () {
            return Meteor.subscribe("files")
        },
        action: function() {
            if (this.ready()){
                this.render("upload");
                this.render("file");
            }
            else {
                this.render("Loading...");
            }
        }
    });
});
