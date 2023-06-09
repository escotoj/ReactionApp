const { Schema, Types, model } = require('mongoose')
// model funtion is imported frm mong which creates models for our db

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            trimmed: true,
            max_length: 25,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            match: [/.+@.+\..+/],
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        }
    ],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }]
    },
    {
        toJSON: {
            getters: true,
        }
    }    
);

// virtual property
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema)

module.exports = User;