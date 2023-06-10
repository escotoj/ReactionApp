const router = require('express').Router();

// fill in with data
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
  router
    .route('/:ThoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

      // REACTIONs /api/Thoughts/:ThoughtId/reactions
  router
    .route('/:ThoughtId/reactions')
    .post(postReaction)
    .delete(deleteReaction);
    
  
module.exports = router;