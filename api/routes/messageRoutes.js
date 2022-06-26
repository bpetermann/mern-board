const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

const { protect } = require('../middleware/authMiddleware');

router
  .route('/')
  .get(messageController.getMessages)
  .post(protect, messageController.createMessage);

module.exports = router;
