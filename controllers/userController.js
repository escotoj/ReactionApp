const { User, Thought } = require('../models') 

const { v4: uuidv4 } = require('uuid')

module.exports = {
    // GET ALL USERS - /GET - GOOD
    async getUsers(req, res) {
      try {
        console.log('GET ALL USERS')
        const users = await User.find();
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    //   GET ONE SINGLEUSER - /GET/:UserId -- GOOD
    async getSingleUser(req, res) {
      try {
        const user = await User.findOne(req.params.userId);
            // .select('-__v'); IN MINIPROJECT EXAMPLE BUT IDK WHAT IT IS
        if (!user) {
          return res.status(404).json({ message: "No user Found :(" });
        }
        console.log('GET SINGLEUSER');
        console.log('user -- ', user);
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    //   CREATE NEW USER - /POST - BAD ONLY WORK FOR ONE USER 
    // UUID --- NEEDS TESTIng ------------------------------
    // async createUser(req, res) {
    //   try {
    //     const user = await User.create({ ...req.body, id: uuidv4() });
    //     res.json(user);
    //     console.log('USERCREATED')
    //   } catch (err) {
    //     console.log(err);
    //     return res.status(500).json(err);
    //   }
    // },

    // ORIGINAL 
    async createUser(req, res) {
      try {
        const user = await User.create(req.body);
        res.json(user);
        console.log('USERCREATED')
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    // ------------------------------------------------
  
  //   DELETE A USER - /DELETE - BAD *******
  async deleteUser(req, res) {
      try {
          const user = User.findByIdAndDelete({ _id: req.params.userId });
          // const user = User.findByIdAndDelete(req.params.userId); -- TRYTHIS _____
          if (!user) {
              return res.status(404).json({message: 'No User Found :('})
          }
          res.json({ message: 'User has been deleted!' });
          console.log('DELETED a user')
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

 