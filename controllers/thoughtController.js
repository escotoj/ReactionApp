const { User, Thought } = require("../models");

module.exports = {
  // GET ALL THOUGHTS - /GET - GOOD
  async getThoughts(req, res) {
    try {
      console.log('GET ALL THOUGHTS')
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //   GET ONE SINGLETHOUGHT - /GET/:ThoughtId - BAD ***** GETS ALL
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne(req.params.thoughtId)
      // .select('-__v'); 
      // IN MINIPROJECT EXAMPLE BUT IDK WHAT IT IS
      if (!thought) {
        return res.status(404).json({ message: "No Thought Found :(" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //   CREATE NEW THOUGHT - /POST - GOOD
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

//   DELETE A THOUGHT - /DELETE - BAD *****
async deleteThought(req, res) {
    try {
        const thought = Thought.findByIdAndDelete({_id: req.params.thoughtId});
        if (!thought) {
            return res.status(404).json({message: 'No Thought Found :('})
        }
        console.log('DELETED THOUGHT')
        res.json({ message: 'Thought has been deleted!' });
    } catch (err) {
        console.log('THOUGHT delete err', err)
        res.status(500).json(err);
    }
},

// UPDATE - /PUT - NEEDS testing - updated the findbyone to find by id
async updateThought(req, res) {
    try {
      const { thoughtText } = req.body;
      const { ThoughtId } = req.params;
        const thought = await Thought.findByIdAndUpdate(
          console.log(ThoughtId),
            {_id: ThoughtId},
            { thoughtText },
            { runValidators: true, new: true },
            console.log('req.body', thoughtText),
        );
        if (!thought) {
            return res.status(404).json({ message: 'No THOUGHT found :(!' });
        }
        res.json(thought);
    } catch (err) {
        console.log('UPDATE err', err)
        res.status(500).json(err);    }
},
// ******************** REACTIONS NEEDS A POST AND DELETE BELOW **********
// REACTION /POST
async postReaction(req, res){
    try{
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $push: {reactions: req.body} },
            {runValidators: true,
            new: true}
        );
        if(!thought){
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
    }
    catch(err){
        console.log('REACTION/POST ERR', err)
        res.status(500).json(err);
    }
},

// DELETE - reaction/DELETE 
async deleteReaction(req, res) {
    try{
        const thought = await Thought.findByIdAndUpdate(
          req.params.thoughtId,
          { $pull: {reactions: { reactionId: req.params.reactionId } } },
          {runValidators: true,
          new: true}
        );

        if(!thought){
            return res.status(404).json({ message: 'No Thought found :(' });
        }
        res.json(thought);
    }
    catch(err){
        console.log('REACTION/DELETE ERR', err)
        res.status(500).json(err);
    }
}
};
// }


