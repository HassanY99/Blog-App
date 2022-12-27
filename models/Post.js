const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        default: false
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

module.exports = Post = mongoose.model('post', PostSchema);