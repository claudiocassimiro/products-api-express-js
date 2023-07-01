import { Request, Response } from 'express';
import { deleteProductService } from '../services/deleteProductsService';

export const deleteProductController = async (req: Request, res: Response) => {
  try {
    const { id } = req.body as { id: string };

    if (!id) throw Error('O id do produto é necessário');

    await deleteProductService(id);

    return res.status(202).json({
      message: 'Produto deletado',
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Erro ao deletar o produto no banco',
      error: err.message,
    });
  }
};
