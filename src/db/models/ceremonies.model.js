const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ceremonySchema = new Schema({
    title: String,
    description: String,
    imageUrl: String,
    subCeremonies: [{
        title: String,
        imageUrl: String,
        customs: [{
            title: String,
            participants: String,
            thingsNeeded: String,
            description: String
        }]
    }]
    
});

const Ceremony = mongoose.model('ceremony', ceremonySchema);

module.exports = Ceremony;