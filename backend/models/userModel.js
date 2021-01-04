import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    resume: [{
        githubLink: {type: String, required: false},
        linkedinLink: {type: String, required: false},
        resumeBody: {type: String, required: true},
        yearsOfExperience: {type: Number, required: true},
    }],
    appRank: [{
        avgScore: {type: Number},
        noOfTestsAttempted: {type: Number},
    }]
    ,
    countryOfResidence: {
        type: String,
        required: true
    },
    isBusiness: {
        type: Boolean,
        required: true,
        default: false
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }

}, {
    timestamps: true
})


const User = mongoose.model('User', userSchema)

export default User