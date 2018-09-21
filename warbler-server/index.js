require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const messagesRoutes = require('./routes/messages');
const { logInRequired, ensureCorrectUser } = require('./middleware/auth');

const db = require('./models');

const PORT = 8081;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// all routes
app.use('/api/auth', authRoutes);
app.use('/api/users/:id/messages', logInRequired, ensureCorrectUser, messagesRoutes);
app.use('/api/messages', logInRequired, async (req, res, next) => {
  try {
    const messages = await db.Message.find()
      .sort({ createdAt: 'desc' })
      .populate({
        username: true,
        profileImageUrl: true,
      });
    return res.status(200).json(messages);
  } catch (e) {
    return next(e);
  }
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(errorHandler);

// Check for environmental variables. Make sure variables are not set to a falsy value.
if (process.env.DB_PASS
  && process.env.DB_USER
  && process.env.SECRET_KEY
) {
  app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`);
  });
} else {
  console.log('Error with environmental variables');
}

