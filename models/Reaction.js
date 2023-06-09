// const { Schema, Types } = require('mongoose')
// // SHOULD BE SCHEMA ONLY NOT A WHOLE MODEL


// const reactionSchema = new Schema(
//     {
//       reactionId: {
//         type: String,
//         require: true,
//         min_length: 1,
//         max_length: 280,
//       },
//       reactionBody: {
//         type: String,
//         require: true,
//         max_length: 280,
//       },
//       username: {
//         type: String,
//         require: true,
//       },
//       createdAt: {
//         type: Date,
//         // timestamp: true, NEEDS TIMESTAMP
//         // getter 
//       }
//     },
//     {
//       toJSON: {
//         getters: true,
//       },
//     }
//   );
  
//   // virtual property
//   thoughtSchema.virtual("reactionSchema").get(function () {
//       return this.reactions.length;
//     });
// module.exports = reactionSchema;