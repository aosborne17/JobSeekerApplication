const User = require('../models/userModel.js') 


// @description  Register new user
// @route  POST /api/users
// @access Public

const registerUser = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
        dateOfBirth,
        contactNumber,
        resume,
        appRank,
        countryOfResidence,
        isBusiness,
        isAdmin,
    } = req.body

    const userExists = await User.findOne({email:email})
    if (userExists) {
        // Throw back error status
        res.status(400)
        // Throw error message to client "User Already Exists"
    }

    // If the email isn't in our database, then we will go ahead and create a new user document
    // We will pass in the information that we receive from the post request
    // We will also make sure to hash the password before it is saved to the db
    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        dateOfBirth,
        contactNumber,
        resume,
        appRank,
        countryOfResidence
    })

    if (user) {
        // 201 means something was created
        res.status(201)
        // After we create the user, we then return the data so we can authenticate them and log them in
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
            // token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
}


module.exports = registerUser