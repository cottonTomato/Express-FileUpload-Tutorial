import { Schema, model } from 'mongoose';
import { IProduct } from '../types';

const ProductSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

export default model<IProduct>('Product', ProductSchema);
