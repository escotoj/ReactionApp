const { User, Thought } = require("../models");

module.exports = {
  // GET ALL THOUGHTS - /GET
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //   GET ONE SINGLETHOUGHT - /GET/:id
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });
      // .select('-__v'); IN MINIPROJECT EXAMPLE BUT IDK WHAT IT IS
      if (!thought) {
        return res.status(404).json({ message: "No Thought Found :(" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //   CREATE NEW THOUGHT - /POST
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

//   DELETE A THOUGHT - /DELETE
async deleteThought(req, res) {
    try {
        const thought = Thought.findByIdAndDelete({_id: req.params.thoughtId});
        if (!thought) {
            return res.status(404).json({message: 'No Thought Found :('})
        }
        res.json({ message: 'Thought has been deleted!' });
    } catch (err) {
        console.log('delete err', err)
        res.status(500).json(err);
    }
},

// UPDATE - /PUT 
async updateThought(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            // NEEDS WORK
            {text: req.body},
            { runValidators: true, new: true }
        );
        if (!thought) {
            return res.status(404).json({ message: 'No THOUGHT found :(!' });
        }
        res.json(thought);
    } catch (err) {
        console.log('UPDATE err', err)
        res.status(500).json(err);    }
}
};
// }


// REACTIONS NEEDS A POST AND DELETE BELOW