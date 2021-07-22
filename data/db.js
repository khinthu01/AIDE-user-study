const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(
  `mongodb+srv://khinthu01:${process.env.DB_PW}@cluster0.3ucvi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
