var path = require('path'),
    fs = require('fs'),
    request = require('request');


exports.index = function (req, res) {
    // res.send('Welcome to the GDI Node Workshop!');
    res.render('index');
};

exports.about = function (req, res) {
    // var path = require('path');
    // res.sendFile(path.join(__dirname, '../public', 'templates', 'index.html'));
    // res.sendFile(path.join(__dirname, '../public', 'css', 'styles.css'));
    res.render('about');
};

exports.error404 = function (req, res) {
    // res.send('<h1> Error! 404! </h1>');
    res.render('404');
};

exports.randomDino = function (req, res) {
    var number = Math.floor(Math.random() * 1449);
    var port = req.get('host');

    request('http://' + port + '/api/get/' + number, function (err, response, body) {
        if (!err && response.statusCode == 200) {

            var dino = JSON.parse(body).dinosaur;

            // console.log(dino);

            request('http://en.wikipedia.org/w/api.php?action=parse&utf8=1&page=' + dino + '&format=json&prop=text&section=0', function(error, dinoRes, dinoBody) {
                if (!error && dinoRes.statusCode == 200) {
                    var dinoInfo = JSON.parse(dinoBody).parse.text['*'];

                    res.render('random', {
                        dinosaur: dino,
                        dinoInfo: dinoInfo
                    });
                }

            });

        }

    });
};
