import prisma from '../lib/prisma';

export const deleteProductService = async (id: string) => {
  try {
    return prisma.products.delete({ where: { id } });
  } catch (error) {
    throw new Error(error.message);
  }
};
