const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/UserController.js");

// /api/Users
router.route("/").get(getUsers).post(createUser);

// /api/Users/:UserId
router.route("/:UserId").get(getSingleUser).put(updateUser).delete(deleteUser);


// *****NEEDS WORK******

// FRUENDS /api/Thoughts/:ThoughtId/reactions ***********
router.route("/:userId/friends").post(addFriend).delete(removeFriend);

module.exports = router;
