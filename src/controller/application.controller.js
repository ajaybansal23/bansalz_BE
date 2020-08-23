const Ceremony = require('../db/models/ceremonies.model');

const ceremonies = (req, res) => {
    console.log("Sending Ceremonies data to UI");

    Ceremony.find({}, (err, ceremonies) => {
        if (err) {
            res.status(500).send({ error: "Could not load ceremonies" })
        }
        setTimeout(() => {
            res.send(ceremonies);
        }, 3000)
    })


};

module.exports = {
    ceremonies
}