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
    var number = Math.floor(Math.random() * 1400);

    var port = process.env.PORT || 3000;

    if (port == 3000) {
        port = 'localhost:3000';
    }

    request('http://' + port + '/api/get/' + number, function (err, response, body) {
        if (!err && response.statusCode == 200) {
            res.render("random", {
                dinosaur: JSON.parse(body).dinosaur
            });
        }

        console.log(err);
    });
};
