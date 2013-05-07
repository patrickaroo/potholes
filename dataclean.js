var conn = new Mongo();
var db = conn.getDB("potholesdata");

db.potholes.find().forEach(function(data){ db.potholes.update({_id:data._id}, {$set: {loc: [data.LONGITUDE, data.LATITUDE], city: "chicago"}}); });

db.potholes.ensureIndex({"loc":"2d"});
