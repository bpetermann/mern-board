const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Message = require('../models/messageModel');

exports.getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({});
  res.status(200).json(messages);
});

exports.deleteMessage = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('No User found');
  }

  const message = await Message.findById(req.params.id);

  if (!message) {
    res.status(404);
    throw new Error('Message not found');
  }

  if (message.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not Authorized');
  }

  await message.remove();

  res.status(200).json({ success: true });
});

exports.createMessage = asyncHandler(async (req, res) => {
  const { messagePost, email } = req.body;
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('No User found');
  }

  const newMessage = await Message.create({
    user: req.user.id,
    messagePost,
    email,
  });

  res.status(201).json(newMessage);
});
