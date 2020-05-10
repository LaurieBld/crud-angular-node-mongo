const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }

});

userSchema.plugin(uniqueValidator);

<<<<<<< HEAD
module.exports = mongoose.model('User', userSchema);
=======
module.exports = mongoose.model('User', userSchema);
>>>>>>> 3da9412e5ac946ec937e09f742117dacb9114be8
