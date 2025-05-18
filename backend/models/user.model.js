import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email',
        ],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6,
    },
    verfied: {      
        type: Boolean,
        default: false,
    }, 
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    verifcationToken: String,
    verifcationTokenExpire: Date,
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);

