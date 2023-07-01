import prisma from '../lib/prisma';

export const getProductsService = async () => {
  try {
    const products = await prisma.products.findMany();

    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};
