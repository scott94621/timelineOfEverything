var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

const database = "test";
const username = "Main";
const userpassword = "Admin1234!";

let mongoUrl = "mongodb+srv://" + username +":" + userpassword + "@cluster0.groab.mongodb.net/" + database +"?retryWrites=true&w=majority";

var db = mongo.connect(mongoUrl
    , {useNewUrlParser: true, useUnifiedTopology: true}
    , function(err, res){
        if(err){console.log(err);}
        else{console.log('connected to ' + db, ' + ', res);}
    });

var app = express();
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var Schema = mongo.Schema;

var EventSchema = new Schema({
    title : { type: String },
    description: {type: String}

}, {versionKey : false});

var model = mongo.model('Event', EventSchema);

app.post('/api/createTimelineEvent', function(req, res,){
    const event = new model(req.body);
    // if(req.body.mode == "save"){
        event.save(function(err,date){
            if(err){
                res.send(err);
            }else{
                res.send({data:"Record has been inserted"});
            }
        });
    // }
    // else{
    //     model.findByIdAndUpdate(req.body.id, {name: req.body.name, address: req.body.address},
    //         function(err, data){
    //             if(err){
    //                 res.send(err);
    //             }else{
    //                 res.send({data:"Record has been Updated"});
    //             }
    //         })
    // }
});

app.get("/api/getUser", function(req, res){
    model.find({"title": "Life on Venus"}, function(err, data){
        if(err){
            res.send(err);
        }else{
            res.send({data});
        }
    })
})

app.listen(8080, function(){
    console.log("listening on port 8080");
})