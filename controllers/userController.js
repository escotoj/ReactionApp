const { User, Thought } = require('../models') 

module.exports = {
    // GET ALL USERS - /GET
    async getUsers(req, res) {
      try {
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    //   GET ONE SINGLEUSER - /GET/:UserId
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.userId });
        // .select('-__v'); IN MINIPROJECT EXAMPLE BUT IDK WHAT IT IS
        if (!user) {
          return res.status(404).json({ message: "No user Found :(" });
        }
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    //   CREATE NEW USER - /POST
    async createUser(req, res) {
      try {
        const user = await User.create(req.body);
        res.json(user);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
  
  //   DELETE A USER - /DELETE
  async deleteUser(req, res) {
      try {
          const user = User.findByIdAndDelete({_id: req.params.userId});
          if (!user) {
              return res.status(404).json({message: 'No User Found :('})
          }
          res.json({ message: 'User has been deleted!' });
      } catch (err) {
          console.log('USER delete err', err)
          res.status(500).json(err);
      }
  },
  
  // UPDATE - /POST 
  async updateUser(req, res) {
      try {
          const user = await User.findOneAndUpdate(
              {_id: req.params.userId},
              // NEEDS WORK ****
              {text: req.body},
              { runValidators: true, new: true }
          );
          if (!user) {
              return res.status(404).json({ message: 'No user found :(!' });
          }
          res.json(user);
      } catch (err) {
          console.log('UPDATE err', err)
          res.status(500).json(err);    }
  },


// *************************** NEEDS WORK *********************************************
// POST /FRIEND 
  async addFriend(rq, res) {
    try {
        const user = await User.findOneAndUpdate(
            {_id: req.params.userId},
            // NEEDS WORK
            // {text: req.body},
            // { runValidators: true, new: true }
        );
        if (!user) {
            return res.status(404).json({ message: 'No user found :(!' });
        }
        res.json(user);
    } catch (err) {
        console.log('UPDATE err', err)
        res.status(500).json(err);    }
},



// DELETE /FRIEND/:id
async removeFriend(rq, res) {
    try {
    const user = await User.findOneAndUpdate(
        {_id: req.params.userId},
        // NEEDS WORK
        // {text: req.body},
        // { runValidators: true, new: true }
    );
    if (!user) {
        return res.status(404).json({ message: 'No Friend :(!' });
    }
    res.json(user);
} catch (err) {
    console.log('UPDATE err', err)
    res.status(500).json(err);    }
}
  };

 