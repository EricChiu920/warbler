const mongoose = require('mongoose');
const User = require('./user');

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    maxLength: 160,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

messageSchema.pre('remove', async function removeMessage(next) {
  try {
    const user = await User.findById(this.userId);
    user.messages.remove(this.id);
    await user.save();
    return next();
  } catch (e) {
    return next({
      message: `Error removing message: ${e.message}`,
    });
  }
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
