import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://khinthu01:<password>@cluster0.3ucvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true, useCreateIndex: true }
);
