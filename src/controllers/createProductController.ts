import { Request, Response } from 'express';
import { createProductService } from '../services/createProductsService';
import type { Products } from '@prisma/client';
import { productValidation } from '../helpers/productValidation';

export const createProductController = async (req: Request, res: Response) => {
  const { name, description, price } = req.body as Products;
  productValidation({ name, description, price });

  try {
    const product = await createProductService({
      name,
      description,
      price,
    });

    if (!product) throw new Error();

    return res.status(201).json({
      message: 'Novo produto criado com sucesso',
      productId: product.id,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Erro ao salvar o produto no banco',
    });
  }
};
