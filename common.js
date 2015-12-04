//Stations = new Mongo.Collection("stations");
//Files = new Mongo.Collection("files");
//Activity = new Mongo.Collection("activity");
var fileStore = new FS.Store.GridFS("testUpload");
Files = new FS.Collection("testUpload", {
    stores: [fileStore]
});
