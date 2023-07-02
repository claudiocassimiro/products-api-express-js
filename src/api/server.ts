import express from 'express';
import dotenv from 'dotenv';
import {
  createProductController,
  deleteProductController,
  getProductsController,
  getProductByIdController,
  editProductController,
} from './routes';
import setupSwagger from '../swagger';

dotenv.config();

const app = express();
const apiRoutes = express.Router();

app.use(express.json());
app.use(apiRoutes);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna todos os produtos.
 *     responses:
 *       200:
 *         description: OK
 */
apiRoutes.get('/', getProductsController);

/**
 * @swagger
 * /api/product/:id:
 *   get:
 *     summary: Retorna um produto por id.
 *     responses:
 *       200:
 *         description: OK
 */
apiRoutes.get('/api/product/:id', getProductByIdController);

/**
 * @swagger
 * /api/create:
 *   post:
 *     summary: Cria um novo produto.
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Dados do produto a ser criado.
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             description:
 *               type: string
 *             price:
 *               type: number
 *     responses:
 *       200:
 *         description: OK
 */
apiRoutes.post('/api/create', createProductController);

/**
 * @swagger
 * /api/edit:
 *   put:
 *     summary: Edita um produto existente.
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Dados do produto a serem editados.
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *     responses:
 *       200:
 *         description: OK
 */
apiRoutes.put('/api/edit', editProductController);

/**
 * @swagger
 * /api/delete:
 *   delete:
 *     summary: deleta um produto pelo id.
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Dados do produto a ser deletado.
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *     responses:
 *       202:
 *         description: OK
 */
apiRoutes.delete('/api/delete', deleteProductController);

setupSwagger(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`App running on port ${process.env.PORT || 3000}`);
});
