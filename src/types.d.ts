import { HydratedDocument } from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncFuncWrapper<A extends (...args: any[]) => any> = (
    ...args: Parameters<A>
) => Promise<ReturnType<A>>;

interface IProduct {
    name: string;
    price: number;
    image: string;
}

type IProductDocument = HydratedDocument<IProduct>;
