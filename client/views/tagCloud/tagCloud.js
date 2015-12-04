   Template.tagcloud.helpers({
        list: function() {
            var stationTags = _.chain(Files.find().fetch()).pluck("tags").flatten().uniq();
            return stationTags._wrapped;
            console.log(stationTags._wrapped);
        }
    });
