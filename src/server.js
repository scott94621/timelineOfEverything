var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');
const { DateTime } = require('luxon');

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

var eventSchema = new Schema({
    title : { type: String },
    description: {type: String},
    date: {type: Date},
    endDate: {type: Date}

}, {versionKey : false});

var locationSchema = new Schema({
    countryName : { type: String },
    placeName: {type: String},
    continent: {type: String},
    currentCountryName: {type: String}
});

var typeSchema = new Schema({
    category : { type: String },
    subCategory: {type: String},
    description: {type: String}
});

var timelineEvent = mongo.model('Event', eventSchema);
var timelineLocation = mongo.model('Location', locationSchema);
var timelineType = mongo.model('Type', typeSchema);

app.post('/api/createTimelineEvent', function(req, res,){
    const event = new timelineEvent(req.body);
    // if(req.body.mode == "save"){
    postMethod(event, res);
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

app.post('/api/createTimelineLocation', function(req, res,){
    const location = new timelineLocation(req.body);
    postMethod(location, res);
    });

app.post('/api/createTimelineType', function(req, res,){
    const type = new timelineType(req.body);
    postMethod(type, res);
    });

app.get("/api/getEvents", function(req, res){
    timelineEvent.find({}, function(err, data){
        if(err){
            res.send(err);
        }else{
            res.send({data});
        }
    })
})

app.get("/api/getLocations", function(req, res){
    timelineLocation.find({}, function(err, data){
        if(err){
            res.send(err);
        }else{
            res.send({data});
        }
    })
})

app.get("/api/getTypes", function(req, res){
    timelineType.find({}, function(err, data){
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

function postMethod(model, res){
    model.save(function(err,data){
        if(err){
            res.send(err);
        }else{
            res.send({data:"Record has been inserted"});
        }
    });
}