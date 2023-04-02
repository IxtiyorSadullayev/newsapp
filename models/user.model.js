const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    fam: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    login: {type: String, required: true},
    password: {type: String, required: true},
    professia: {type: String, required: false},
    work: {type: String, required: true},
    ban: {type: Boolean, default: false},
    role: {type: String, default: "User", enum: ["User", "Admin"]}
}, {
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema)