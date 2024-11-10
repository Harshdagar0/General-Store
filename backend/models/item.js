const mongoose = require("mongoose");

const itemScheam = new mongoose.Schema({
    name: String,
    company:String,
    price: Number,
    description:String,
    category:String,
    featured:String,
    image:String,
    image1:String,
    image2:String,
    image3:String,
    colors:Array

});
const itemModel = mongoose.model("item",itemScheam);

module.exports = itemModel;