import { Request, Response } from 'express';
import { getProductByIdService } from '../services/getProductByIdService';

export const getProductByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const product = await getProductByIdService(id);

    return res.status(200).json({ product });
  } catch (err) {
    return res.status(500).json({
      message: 'Erro ao buscar por produtos no banco',
    });
  }
};
