import mongoose, { mongo } from 'mongoose'
import bcrypt from 'bcryptjs'



const jobPostingScehma = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    jobTitle: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
})

const jobPosting = mongoose.model('jobPostingSchema', jobPostingScehma)

export default jobPosting