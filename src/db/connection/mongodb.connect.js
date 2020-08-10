const mongoose = require("mongoose");
const keys = require("../../config/keys");

//connect to Mongodb
const connectionURL = `mongodb+srv://${keys.mongodb.userName}:${keys.mongodb.password}@${keys.mongodb.cluster}.mongodb.net/${keys.mongodb.database}?retryWrites=true&w=majority`;

console.log(connectionURL);
mongoose.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Connected to mongodb");
  }
);

module.exports = mongoose;