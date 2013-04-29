var conn = new Mongo();
var db = conn.getDB("potholedata");

db.potholes.find().forEach(function(data){
    db.potholes.update({_id:data._id}, {$set: {loc: [data.Longitude, data.Latitude], city: "chicago"}});
});

db.potholes.ensureIndex({"loc":"2d"});
