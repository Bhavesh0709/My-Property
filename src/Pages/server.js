var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var db = "mongodb://localhost:27017/property";

const app = express();


mongoose.connect(db).then(() => {
    console.log("Connection succesfull");
}).catch((err) => console.log(err));

var conn = mongoose.connection;

const userSchema = {

    listingId: Number,
    SalesPerson1: String,
    SalesPerson2: String,
    ListingAssistant1:String,
    ListingAssistant2:String,
    ListingCreationDate: String,
    cityCode:String,
    countryCode:String,
    fname:String,
    lname:String,
    pinCode:Number,
    stateCode:String,
    Cateogry:String,
    SearchPrice:Number,
    ViewPrice:Number,
    auctionLocation:String,
    authority:String,
    bathroom:Number,
    bedroom:Number,
    date:String,
    description:String,
    duplicateLand:Boolean,
    energyRating:Number,
    heading:String,
    homeNland:Boolean,
    houseSizeInMet:Number,
    houseSizeinSq:Number,
    landArea:Number,
    landAreaUnit:Number,
    landFrontage:Number,
    occupancy:Boolean,   
    showPrice:Boolean,
    time:String,
    underContract:Boolean


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
    console.log("ID : ",req.body.data.listID);
    console.log("Sales p1: ",req.body.data.salesP1);
    const newuser = new propertymodel({
        
        // Listing Data of the user
        listingId:req.body.data.listID,
        SalesPerson1: req.body.data.salesP1,
        SalesPerson2: req.body.data.salesP2,
        ListingAssistant1:req.body.data.assis1,
        ListingAssistant2:req.body.data.assis2,
        ListingCreationDate: req.body.data.date,

        // Personal Data of the user
        cityCode:req.body.pdata.cityCode,
        countryCode:req.body.pdata.countryCode,
        fname:req.body.pdata.fname,
        lname:req.body.pdata.lname,
        pinCode:req.body.pdata.pinCode,
        stateCode:req.body.pdata.stateCode,
      
        // Property Data of the user
        Cateogry:req.body.prodata.Cateogry,
        SearchPrice:req.body.prodata.SearchPrice,
        ViewPrice:req.body.prodata.ViewPrice,
        auctionLocation:req.body.prodata.auctionLocation,
        authority:req.body.prodata.authority,
        bathroom:req.body.prodata.bathroom,
        bedroom:req.body.prodata.bedroom,
        date:req.body.prodata.date,
        description:req.body.prodata.description,
        duplicateLand:req.body.prodata.duplicateLand,
        energyRating:req.body.prodata.energyRating,
        heading:req.body.prodata.heading,
        homeNland:req.body.prodata.homeNland,
        houseSizeInMet:req.body.prodata.houseSizeInMet,
        houseSizeinSq:req.body.prodata.houseSizeInSq,
        landArea:req.body.prodata.landArea,
        landAreaUnit:req.body.prodata.landAreaUnit,
        landFrontage:req.body.prodata.landFrontage,
        occupancy:req.body.prodata.occupancy,
        
        showPrice:req.body.prodata.showPrice,
        time:req.body.prodata.time,
        underContract:req.body.prodata.underContract


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