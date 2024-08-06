import mongoose from "mongoose";

const connetDB = async () => {
    return mongoose.connect(process.env.MONGODB_URI as string);
}

export default connetDB;