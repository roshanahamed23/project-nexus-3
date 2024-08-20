import mongoose from "mongoose";

export default async function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const url = process.env.MONGODB_URI;
    if (!url) {
      throw new Error('MONGODB_URI environment variable is not set');
    }
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  }
}
