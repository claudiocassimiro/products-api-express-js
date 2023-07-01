import express from 'express';
import dotenv from 'dotenv';
import { createProductController } from './routes';

dotenv.config();

const app = express();
const apiRoutes = express.Router();

app.use(express.json());
app.use(apiRoutes);

apiRoutes.post('/api/createProduct', createProductController);

app.listen(process.env.PORT || 3000, () => {
  console.log(`App running on port ${process.env.PORT || 3000}`);
});

app.get('/', (req, res) => {
  return res.send({ message: 'Hello, world!' });
});
