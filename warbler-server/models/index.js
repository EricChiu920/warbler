const mongoose = require('mongoose');
require('dontenv').config();

const { DB_USER } = process.env;
const { DB_PASS } = process.env;

mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@ds261460.mlab.com:61460/warbler-db`, {
  keepAlive: true,
  useMongoClient: true,
});
