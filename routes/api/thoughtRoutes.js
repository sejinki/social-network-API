const router = require('express').Router();
const {
  getAllThought,
  getSingleThought,
  createThought,
  addReaction,
  removeReaction,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/courses
router.route('/').get(getAllThought).post(createThought);

// /api/courses/:courseId
router
  .route('/:id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  router
  .route('/:id/reactions')
  .post(addReaction)

  router
  .route('/:id/reactions/:reactionid')
  .delete(removeReaction)

module.exports = router;
