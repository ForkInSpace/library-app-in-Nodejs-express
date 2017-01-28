var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
        {
            title: 'Martian',
            genre: 'Sci-fi',
            author: 'Andy Wier',
            bookId: 18007564,
            read: true
        },
        {
            title: 'Insurgent',
            genre: 'Sci-fi',
            author: 'Veronica Roth',
            bookId: 11735983,
            read: false
        },
        {
            title: 'Dark Water',
            genre: 'Crime',
            author: 'Robert Bryndza',
            read: false
        },
        {
            title: 'Yesternight',
            genre: 'Mystery',
            author: 'Cat Winters',
            read: false
        }
];


var router = function(nav){
    
    
    adminRouter.route('/addBooks')
        .get(function(req, res){
            var url = 'mongodb://localhost:27017/libraryApp';
        
        mongodb.connect(url, function(err, db){
           var collection = db.collection('books');
            collection.insertMany(books, 
                function(err, results){
                    res.send(results);
                    db.close();
            });
        });
            //res.send('inserting books');
        
    });
    
    
    return adminRouter;
};

module.exports = router;