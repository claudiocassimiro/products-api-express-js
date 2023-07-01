import prisma from '../lib/prisma';

export const createProductService = async ({ name, description, price }) => {
  try {
    const product = await prisma.products.create({
      data: { name, description, price },
    });

    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};
