const Contents = require('../models/contentModel');

module.exports = function(app) {
    app.get('/api/setupContents', function(req, res) {
        //seed database
        let starterContents = [
            {
                content: 'string',
                className: 'this is my classname',
                title: 'this is my title string',
                typeOfContent: 'this is my type of content string',
                visible: true
            },
            {
                content: 'this is my long content string',
                className: 'this is my classname',
                title: 'this is my title string',
                typeOfContent: 'this is my type of content string',
                visible: true
            },
            {
                content: 'this is my long content string',
                className: 'this is my classname',
                title: 'this is my title string',
                typeOfContent: 'this is my type of content string',
                visible: true
            }
        ];
        Contents.create(starterContents, function(err, results) {
            res.send(results)
        })
    })
}