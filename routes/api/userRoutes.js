const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getAllUsers).post(createUser);

// /api/user/:id
router.route('/:id').get(getSingleUser).delete(deleteUser).put(updateUser)

// // /api/user/:user/thoughts
// router.route('/:id/').post(addFriend);

// // /api/students/:studentId/assignments/:assignmentId
// router.route('/:id/friend/:friendId').delete(removeFriend);

module.exports = router;
