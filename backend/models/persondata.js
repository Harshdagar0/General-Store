const mongoose = require("mongoose");

const itemScheam = new mongoose.Schema({
    name: String,
    price: Number,
    quantiy: Number,
    color:String,
    image:String,
    email:String,

});
const persondataModel = mongoose.model("persondata",itemScheam);

module.exports = persondataModel;