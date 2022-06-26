const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

const { protect } = require('../middleware/authMiddleware');

router
  .route('/')
  .get(messageController.getMessages)
  .post(protect, messageController.createMessage);

router
  .route('/:id')
  .get(protect, messageController.getMessage)
  .delete(protect, messageController.deleteMessage)
  .put(protect, messageController.updateMessage);

module.exports = router;
