const {Schema, model} = require('mongoose');

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    quirk: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Hero', 'Villain', 'Teacher'],
        required: true
    },
    imageURL: {
        type: String,
        default: 'https://w7.pngwing.com/pngs/419/473/png-transparent-computer-icons-user-profile-login-user-heroes-sphere-black-thumbnail.png'},
        
    active: {
        type: Boolean,
        default: true},
    
}, {timestamps: true})

const Character= model('Character',characterSchema); 

module.exports = Character; 