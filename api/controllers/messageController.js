const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Message = require('../models/messageModel');

exports.getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({});
  res.status(200).json(messages);
});

exports.createMessage = asyncHandler(async (req, res) => {
  const { message } = req.body;
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('No User found');
  }

  const newMessage = await Message.create({
    user: req.user.id,
    message,
  });

  res.status(201).json(newMessage);
});
