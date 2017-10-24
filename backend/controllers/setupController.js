const Contents = require('../models/contentModel');

module.exports = (app) => {
    app.get('/api/setupContents', (req, res) => {
        //seed database
        let starterContents = [
            {
                area: "landingPage",
                contentType: "landingPage",
                content: {
                    header: 'Gabinet Psychologiczny',
                    subHeader: "mgr Katarzyna Tolstych",
                },
                visible: true                
            },
            {
                area: "mainContent",
                contentType: "paragraph",
                content: {
                    title: "myTitle",
                    text: "longStringText",                    
                },
                visible: true
            },
            {
                area: "mainContent",
                contentType: "header",
                content: {
                    header: 'O Mnie',
                    subHeader: "Pasjonatka zawodu – żyjąca w myśl: „Rób, co kochasz – kochaj to, co robisz”!",
                },
                visible: true
            },
            {
                area: "footer",
                content: {
                    header: 'Przydatne Linki',
                    links: [
                        "EMDR",
                        "BDP",
                        "Psychologia"
                    ]
                },
                visible: true
            }
        ];
        Contents.create(starterContents, (err, results) => {
            res.send(results)
        });
    });
};