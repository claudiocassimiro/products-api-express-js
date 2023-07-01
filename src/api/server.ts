import express from 'express';
import dotenv from 'dotenv';
import {
  createProductController,
  deleteProductController,
  getProductsController,
  getProductByIdController,
  editProductController,
} from './routes';

dotenv.config();

const app = express();
const apiRoutes = express.Router();

app.use(express.json());
app.use(apiRoutes);

apiRoutes.get('/api', getProductsController);
apiRoutes.get('/api/product/:id', getProductByIdController);
apiRoutes.post('/api/create', createProductController);
apiRoutes.post('/api/edit', editProductController);
apiRoutes.delete('/api/delete', deleteProductController);

app.listen(process.env.PORT || 3000, () => {
  console.log(`App running on port ${process.env.PORT || 3000}`);
});
