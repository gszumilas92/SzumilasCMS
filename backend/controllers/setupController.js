const Contents = require('../models/contentModel');

module.exports = (app) => {
    app.get('/api/setupContents', (req, res) => {
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
        Contents.create(starterContents, (err, results) => {
            res.send(results)
        });
    });
};