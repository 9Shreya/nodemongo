const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [
        
    ],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    console.log('get req');
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
                console.log(err);
            });
    });
});

router.get('/users/:email', (req, res) => {
    console.log('get req');
    connection((db) => {
   
        console.log(req.params.email)
         
        db.collection('users')
            .findOne({"email":req.params.email})
            .then((users) => {
                console.log(users)
                response.data = users;
                res.json(response);
               
            })
            .catch((err) => {
                sendError(err, res);
                console.log(err);
            });
    });
});

router.post('/users', (req, res) => {
    console.log('post ');
console.log(req.body);

    connection((db) => {
        db.collection('users')
            .save(req.body)
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
 router.post('/users', (req, res) => {
console.log("hj");
console.log(req);
})

router.delete('/users/:id', (req, res) => {
    connection((db) => {
        db.collection('users')
            .remove({id:mongojs.ObjectID(req.params.id)})
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});


module.exports = router;