const { Schema, Types, model } = require("mongoose");
// const reactionSchema = require("./Reaction");


// REACTION SCHEMA
const reactionSchema = new Schema(
    {
      reactionId: {
        type: String,
        required: true,
      },
      reactionBody: {
        type: String,
        required: true,
        max_length: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        // timestamp: true, NEEDS TIMESTAMP
        // getter 
      }
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      // timestamp: true, NEEDS TIMESTAMP
      default: Date.now,
    },
    // array of nested documents
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// virtual property
thoughtSchema.virtual("reactionSchema").get(function () {
    return this.reactions.length;
  });
  
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
