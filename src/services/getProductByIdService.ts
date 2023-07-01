import prisma from '../lib/prisma';

export const getProductByIdService = async (id: string) => {
  try {
    const products = await prisma.products.findUnique({ where: { id } });

    return products;
  } catch (error) {
    throw new Error(error.message);
  }
};
