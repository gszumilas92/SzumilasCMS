const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

//My Variables
const app = express();
const port = process.env.PORT || 3000;
// const index = fs.readFileSync(__dirname + '/public/index.html', 'utf8')
const index = fs.readFileSync(__dirname + '/../dist/index.html', 'utf8')

//Settings
app.use('/', express.static(__dirname + '/../dist'));
mongoose.connect("mongodb://admin:testadmin@ds227045.mlab.com:27045/szumilas-cms")

//Controllers
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

setupController(app);
apiController(app);








//Return Index
app.get('/', (req, res) => {
    res.send(index)
});

app.listen(port);