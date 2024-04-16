# W4 D5 : CRUD Operations in Express.js with Mongoose

Watch recorded class at:
https://drive.google.com/file/d/1iajqcx7JWZ0QDl1umPteNuyJbCpSy-YI/view?usp=drivesdk

In this tutorial, we'll cover how to perform CRUD (Create, Read, Update, Delete) operations in an Express.js application using Mongoose, a MongoDB ODM (Object Data Modeling) library. We'll create models for two resources: `User` and `Tweet`, and define their relationships. Additionally, we'll define routes and controllers to handle CRUD operations.

## User Model

Create a `user.js` file inside the `models` folder to define the `User` model:

```javascript
// models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  dateOfBirth: Date,
  password: String,
  followings: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  followers: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  tweets: [{ type: mongoose.Types.ObjectId, ref: 'Tweet' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

## Tweet Model

Create a `tweet.js` file inside the `models` folder to define the `Tweet` model:

```javascript
// models/tweet.js

const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  text: String,
  byUser: { type: mongoose.Types.ObjectId, ref: 'User' },
  createdDate: { type: Date, default: Date.now }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
```

## Connecting to MongoDB

In your main Express application file (`app.js` or `index.js`), connect to MongoDB using Mongoose:

```javascript
// app.js

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const Tweet = require('./models/tweet');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/tw-db', {
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
```

## Defining Routes and Controllers

Create route and controller files for `User` and `Tweet` resources. For example:

### User Routes and Controller:

```javascript
// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
```

```javascript
// controllers/userController.js

const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Implement other controller methods for CRUD operations
```

### Tweet Routes and Controller:

```javascript
// routes/tweetRoutes.js

const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetController');

router.post('/tweets', tweetController.createTweet);
router.get('/tweets', tweetController.getAllTweets);
router.get('/tweets/:id', tweetController.getTweetById);
router.put('/tweets/:id', tweetController.updateTweet);
router.delete('/tweets/:id', tweetController.deleteTweet);

module.exports = router;
```

```javascript
// controllers/tweetController.js

const Tweet = require('../models/tweet');

exports.createTweet = async (req, res) => {
  try {
    const tweet = await Tweet.create(req.body);
    res.status(201).json(tweet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Implement other controller methods for CRUD operations
```