import mongoose from 'mongoose';

const dbName = 'fileUpload';

async function connectDB(uri: string) {
    return mongoose.connect(uri, {
        dbName,
    });
}

export default connectDB;
