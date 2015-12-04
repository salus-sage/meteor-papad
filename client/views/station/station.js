    Template.station.events({
        "click li": function(event) {
            event.preventDefault();
            Session.set("stationName", this.name);
        }
    });
