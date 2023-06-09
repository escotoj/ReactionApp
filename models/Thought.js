const { Schema, Types, model } = require("mongoose");

// REACTION SCHEMA
const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
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
        default: Date.now,
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
      default: Date.now,
    },
    // array of nested documents
    reactions: [reactionSchema],
  },
  {
    timestamps: true, // timestamps added 
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// virtual property
thoughtSchema.virtual("reactionSchema").get(function () {
    return this.reactions.length;
  });
  
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
