const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ceremonySchema = new Schema({
    title: String,
    description: String,
    imageUrl: String,
    subCeremonies: [{
        subTitle: String,
        subImage: String,
        sections: [{
            sectionTitle: String,
            sectionDescription: String,
            sectionImage: String
        }]
    }]
    
});

const Ceremony = mongoose.model('ceremony', ceremonySchema);

module.exports = Ceremony;