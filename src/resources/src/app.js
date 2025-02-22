import express from 'express';
import routes from './routes/index.js';

const app = express();

// Middleware para JSON
app.use(express.json());

// Configurar rutas
app.use('/api', routes);

export default app;