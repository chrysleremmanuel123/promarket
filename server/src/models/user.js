const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
//Create User Schema
const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
            unique: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            min: 3,
            max: 20,
            unique: true
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
        contactNumber: { type: String },
        profilePicture: { type: String }
    },
    { timeStamps: true }
);
// userSchema.virtual('password').set((password) => {
//     this.hash_password = bcrypt.hashSync(password, 10);
// });

userSchema.methods = {
    authenticate: async function (password) {
        return await bcrypt.compare(password, this.hash_password);
    }

}

const User = mongoose.model('User', userSchema)
module.exports = User;
