import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import Product from '../models/Product.model';
import { IProduct, IProductDocument } from '../types';

type CreateProductRequest = IProduct;
type CreateProductResponse = IProductDocument;
type CreateProductHandler = RequestHandler<
    object,
    CreateProductResponse,
    CreateProductRequest
>;

const createProduct: CreateProductHandler = async function (req, res) {
    const product = await Product.create(req.body);
    res.status(StatusCodes.OK).json(product);
};

type GetAllResponse = IProductDocument[];
type GetAllProductHandler = RequestHandler<object, GetAllResponse>;

const getAllProduct: GetAllProductHandler = async function (req, res) {
    const products = await Product.find({});
    res.status(StatusCodes.OK).json(products);
};

export { createProduct, getAllProduct };
