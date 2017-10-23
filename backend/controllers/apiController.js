const Contents = require('../models/contentModel');
const bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/contents/:content', function(req, res) {
        Contents.find({ content: req.params.content },
        function(err, contents){ 
            if(err) throw err;
            res.send(contents);
        });
    });

    app.get('/api/content/:id', function(req, res) {
        Contents.findById({_id: req.params.id },
            function(err, content){
                if(err) throw err;
                res.send(content);
            });
    });

    //Update || Add Content
    app.post('/api/content', function(req, res) {
        if(req.body.id) {
            Contents.findByIdAndUpdate(req.body.id, {
                content: req.body.content,
                className: req.body.className,
                title: req.body.title,
                typeOfContent: req.body.typeOfContent,
                visible: req.body.visible
            }, function(err, content) {
                if(err) throw err;
                res.send('SuccessUpdate');
            });
        } else {
            let newContent = Contents({
                content: req.body.content,
                className: req.body.className,
                title: req.body.title,
                typeOfContent: req.body.typeOfContent,
                visible: req.body.visible
            });
            newContent.save(function(err) {
                if(err) throw err;        
                res.send('SuccessSave')
            });
        }
    });

    app.delete('/api/content', function(req, res) {
        Contents.findByIdAndRemove(req.body.id, function(err) {
            if(err) throw err;        
            res.send('Success')
        });
    });
}