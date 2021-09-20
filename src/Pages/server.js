var mongoose = require('mongoose');
var express = require('express');
var url = require('url');
var bodyParser = require('body-parser');
var db = "mongodb://localhost:27017/property";

const app = express();


mongoose.connect(db).then(() => {
    console.log("Connection succesfull");
}).catch((err) => console.log(err));

var conn = mongoose.connection;
const userSchema = {
    name : String,
    lname: String,
    country: String,
    state: String,
    city : String,
    pincode: Number
}
const propertymodel = new mongoose.model("PropertyDetails",userSchema);


app.use(bodyParser.json())
app.get('/',(req,res,next) => {
    res.status(200).json({
        msg:"This is simple request"
    })
})
app.get('/posts',(req,res,next) => {
    res.status(200).json({
        msg:"This is get request"
    })
})
app.post('/posts',(req,res,next) => {
    console.log(req.body);
    console.log("first name : ",req.body.data.fname);

    const newuser = new propertymodel({
        name : req.body.data.fname,
        lname : req.body.data.lname,
        country : req.body.data.countryCode,
        state: req.body.data.stateCode,
        city: req.body.data.cityCode,
        pincode : req.body.data.pinCode
    });
    newuser.save(function(err) {
        if(err) console.log(err);
        else
        {
            console.log("In else part");
        }
    });
})

app.listen(3001, () => {
    console.log('Server running on 3000 port');
})
module.exports = conn;