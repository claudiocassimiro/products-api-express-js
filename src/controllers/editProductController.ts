import { Request, Response } from 'express';
import { editProductService } from '../services/editProductService';
import type { Products } from '@prisma/client';

export const editProductController = async (req: Request, res: Response) => {
  const productData = req.body as Products;

  const { id } = productData;

  if (!id) return res.status(422).json({ message: 'Informe o id do produto' });

  try {
    const product = await editProductService(productData);

    if (!product) throw new Error();

    return res.status(200).json({
      message: 'Produto editado com sucesso',
      product,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Erro ao editar o produto no banco',
    });
  }
};
