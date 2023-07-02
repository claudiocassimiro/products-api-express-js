import swaggerJSDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['src/api/*.ts'],
};

const setupSwagger = (app: Express) => {
  const swaggerSpec = swaggerJSDoc(options);

  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};

export default setupSwagger;
