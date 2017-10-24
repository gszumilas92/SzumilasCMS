const Contents = require('../models/contentModel');
const bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/contents/:area/:contentType', (req, res) => {
        Contents.find({ area: req.params.area }, (err, contents) => { 
            if(err) throw err;
            res.send(contents);
        });
    });

    app.get('/api/content/:id', (req, res) => {
        Contents.findById({_id: req.params.id }, (err, content) => {
            if(err) throw err;
            res.send(content);
        });
    });

    //Update || Add Content
    app.post('/api/content', (req, res) => {
        if(req.body.id) {
            Contents.findByIdAndUpdate(req.body.id, {
                area: req.body.area,
                contentType: req.body.contentType,
                content: req.body.content,
                visible: req.body.visible
            }, (err, content) => {
                if(err) throw err;
                res.send('SuccessUpdate');
            });
        } else {
            let newContent = Contents({
                area: req.body.area,
                contentType: req.body.contentType,
                content: req.body.content,
                visible: req.body.visible
            });
            newContent.save((err) => {
                if(err) throw err;        
                res.send('SuccessSave')
            });
        }
    });

    app.delete('/api/content', (req, res) => {
        Contents.findByIdAndRemove(req.body.id, (err) => {
            if(err) throw err;        
            res.send('Success')
        });
    });
}