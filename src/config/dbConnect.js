import mongoose, { mongo } from 'mongoose';

async function connectInTheDataBase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default connectInTheDataBase;
