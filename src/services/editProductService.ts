import prisma from '../lib/prisma';
import { Products } from '@prisma/client';

export const editProductService = async (productData: Products) => {
  try {
    const product = await prisma.products.update({
      where: { id: productData.id },
      data: productData,
    });

    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};
