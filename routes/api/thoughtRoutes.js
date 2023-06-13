const router = require('express').Router();

// IMPORTING THOUGHT FUNCTIONS
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought, postReaction, deleteReaction
  } = require('../../controllers/ThoughtController.js');
  
  // ALL THOUGHTS /api/Thoughts
  router.route('/').get(getThoughts).post(createThought);
  
  // INDIVIDUAL THOUGHT ROUTES /api/Thoughts/:ThoughtId
  router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

      // REACTIONs /api/Thoughts/:ThoughtId/reactions
  router.route('/:thoughtId/reactions').post(postReaction);

  router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
  
module.exports = router;