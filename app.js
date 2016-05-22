var express = require('express'),
    homeController = require('./controllers/home'),
    apiController = require('./controllers/api'),
    jade = require('jade'),
    app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'jade');


// Serve static files (i.e. images, scripts, styles, templates) from public/ directory
app.use(express.static('public'));

app.get('/', homeController.index);

app.get('/about', homeController.about);

app.get('/api/all', apiController.all);
app.get('/api/get/:id', apiController.get);

// app.get('/dino', homeController.randomDino);


// Catch all
app.get('/*', homeController.error404);

app.listen(port, function () {
    console.log('Your app is listening on port ' + port);
});
