import swaggerJSDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';
import { Express } from 'express';

import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

const basePath = isProduction ? 'dist/api' : 'src/api';

const apiFiles = [
  path.join(basePath, '**/*.ts'),
  path.join(basePath, '**/*.js'),
];

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
  },
  apis: apiFiles,
};

const setupSwagger = (app: Express) => {
  const swaggerSpec = swaggerJSDoc(options);

  app.get('/api-docs ', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};

export default setupSwagger;
