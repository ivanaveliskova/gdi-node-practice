var path = require('path'),
    fs = require('fs');

exports.all = function (req, res) {
    var jsonPath = path.join(__dirname, '/../data/dinosaurs.json');
    fs.readFile(jsonPath, 'utf-8', function (err, data) {
        if (err) throw err;

        res.send(JSON.parse(data));
    });
};

exports.get = function (req, res) {
    // console.log(req.params.id);
    // res.send("Get the dinosaur at the ID's index");

    var jsonPath = path.join(__dirname, '/../data/dinosaurs.json');
    fs.readFile(jsonPath, 'utf-8', function (err, data) {
        if (err) throw err;

        var id = req.params.id,
            jsonData = JSON.parse(data),
            dinoId = {
                dinosaur: jsonData.dinosaurs[id]
            };

        res.send(dinoId);
    });
};
