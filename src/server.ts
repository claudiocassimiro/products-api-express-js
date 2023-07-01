import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log(`App running on port ${process.env.PORT || 3000}`);
});

app.get('/', (req, res) => {
  res.send({ message: 'Hello, World!' });
});
