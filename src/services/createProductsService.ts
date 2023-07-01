import prisma from '../lib/prisma';
import { Product } from '../helpers/types';

export const createProductService = async ({
  name,
  description,
  price,
}: Product) => {
  try {
    const product = await prisma.products.create({
      data: { name, description, price },
    });

    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};
