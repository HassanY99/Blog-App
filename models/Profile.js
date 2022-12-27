const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    bio: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
},
{
    timestamps: true 
}
);


module.exports = Profile = mongoose.model('profile', ProfileSchema);