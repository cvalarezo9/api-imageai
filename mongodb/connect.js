import mongoose from "mongoose";

const connectDB =(url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
    .then(() => console.log('MongoDB connected...'))
    .catch(() => console.log('Failed to connect'))
}

export default connectDB;