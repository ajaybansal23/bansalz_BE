const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>.mongodb.net/bansalz?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    }
})

const User = mongoose.model('User', userSchema);

const user1 = new User({
    name: 'Ajay',
    age: 35
})

user1.save().then((user1) => {
    console.log(user1);
}).catch((error) => {
    console.log('Error', error)
})