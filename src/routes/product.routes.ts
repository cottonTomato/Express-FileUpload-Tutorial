import { Router } from 'express';
import {
    createProduct,
    getAllProduct,
} from '../controllers/product.controller';
import { uploadProductImage } from '../controllers/upload.controller';

const router = Router();

router.route('/').get(getAllProduct).post(createProduct);
router.route('/uploads').post(uploadProductImage);

export default router;
