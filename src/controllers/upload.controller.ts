import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UploadedFile } from 'express-fileupload';
import path from 'path';
import { BadRequest } from '../errors';

type UploadImageResponse = { image: { src: string } };
type UploadImageRequest = RequestHandler<object, UploadImageResponse>;

const uploadProductImage: UploadImageRequest = async function (req, res) {
    if (!req.files || Object.keys(req.files).length == 0) {
        throw new BadRequest('No File Provided');
    }

    const image = req.files.image as UploadedFile;
    const filePath = path.join(__dirname, '../../images', `${image.name}`);

    await image.mv(filePath);

    res.status(StatusCodes.OK).json({
        image: { src: '/uploads/' + `${image.name}` },
    });
};

export { uploadProductImage };
