const { User, Thought } = require("../models");

module.exports = {
  // GET ALL USERS - /GET - GOOD
  async getUsers(req, res) {
    try {
      console.log("GET ALL USERS");
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //   GET ONE SINGLEUSER - /GET/:UserId -- GOOD
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({_id: req.params.userId});
      if (!user) {
        return res.status(404).json({ message: "No user Found :(" });
      }
      console.log("GET SINGLEUSER");
      console.log("user -- ", user);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // ORIGINAL
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
      console.log("USERCREATED");
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // ------------------------------------------------

  //   DELETE A USER - /DELETE - GOOD
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete({ _id: req.params.userId });
      if (!user) {
        return res.status(404).json({ message: "No User Found :(" });
      }
      res.json({ message: "User has been deleted!" });
      console.log("DELETED a user");
    } catch (err) {
      console.log("USER delete err", err);
      res.status(500).json(err);
    }
  },

  // UPDATE - /POST - NEEDS TESTING
  async updateUser(req, res) {
    try {
      console.log("req.body", req.body),
        console.log("req.params.userId", req.params.userId);
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        {
          runValidators: true,
          new: true,
        }
      );
      if (!user) {
        return res.status(404).json({ message: "No user found :(!" });
      }
      res.json(user);
    } catch (err) {
      console.log("UPDATE err", err);
      res.status(500).json(err);
    }
  },


  // POST /FRIEND
  async addFriend(req, res) {
    try {
      const { userId } = req.params;
      const { friendId } = req.body;
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { friends: friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No user found :(!" });
      }
      res.json(user);
    } catch (err) {
      console.log("UPDATE err", err);
      res.status(500).json(err);
    }
  },

  // DELETE /FRIEND/:id
  async removeFriend(req, res) {
    const { userId } = req.params;
    const { friendId } = req.body;
    try {
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $pull: { friends: friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: "No Friend :(!" });
      }
      res.json(user);
    } catch (err) {
      console.log("UPDATE err", err);
      res.status(500).json(err);
    }
  },
};
