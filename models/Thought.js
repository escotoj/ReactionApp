const { Schema, Types } = require("mongoose");
const reactionSchema = require("./Reaction");

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
