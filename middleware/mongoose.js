import mongoose from "mongoose";

const connectDB = handler => async (req, res, next) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    await mongoose.connect(process.env.MONGODB_URI);
    next()
    return handler(req, res);
    
}
export default connectDB;