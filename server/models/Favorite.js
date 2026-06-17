const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const favorite  = mongoose.model("Favorite",favoriteSchema);

module.exports = favorite;