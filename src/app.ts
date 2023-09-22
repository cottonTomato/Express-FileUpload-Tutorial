import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import { productRouter } from './routes';
import { notFoundHandler, errorHandler } from './middleware';
import connectDB from './db/connect';

dotenv.config();

const port = process.env.PORT ?? 8080;
const app = express();

// * Middlewares
app.use(express.json());
app.use(fileUpload());

// * Routers
app.use('/api/v1/products', productRouter);

// * Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

async function startServer() {
    try {
        await connectDB(process.env.MONGO_URI!);

        app.listen(port, () => {
            console.log(`Server Listening to port: ${port}...`);
        });
    } catch (error) {
        console.log(error);
        console.log('Closing Application...');
    }
}

// function startServer() {
//     app.listen(port, () => {
//         console.log(`Server Listening to port: ${port}...`);
//     });
// }

void startServer();
