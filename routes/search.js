var mongoose = require('mongoose');

var PotholeSchema = new mongoose.Schema({
        ADDRESS: String,
        LATITUDE: String,
        LONGITUDE: String
    },
    {
        collection: 'potholes'
    }
);

var Pothole = mongoose.model('pothole', PotholeSchema);

exports.byLoc = function(req, res){
    console.log(req.query.lat, req.query.lng);
    return Pothole.find({
            loc: { $nearSphere:[ req.query.lng, req.query.lat ], $maxDistance: 100}
            }).limit(5).execFind(function(err, pothole){
            console.log('here', pothole);
            res.send(pothole);
    });
};

exports.byAddress = function(req, res){
    res.send('testing');
};
