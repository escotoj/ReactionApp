const { Schema, Types, model } = require("mongoose");
// const reactionSchema = require("./Reaction");


// REACTION SCHEMA
const reactionSchema = new Schema(
    {
      reactionId: {
        type: String,
        require: true,
      },
      reactionBody: {
        type: String,
        require: true,
        max_length: 280,
      },
      username: {
        type: String,
        require: true,
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
      require: true,
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
