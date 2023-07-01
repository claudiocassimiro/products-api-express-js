import { Request, Response } from 'express';
import { getProductsService } from '../services/getProductsService';

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getProductsService();

    return res.status(200).json({ products });
  } catch (err) {
    return res.status(500).json({
      message: 'Erro ao buscar por produtos no banco',
    });
  }
};
