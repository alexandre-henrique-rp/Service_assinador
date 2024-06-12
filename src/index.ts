import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import RootRoutes from './routes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(RootRoutes);

app.listen(3041, () => {
  console.log('Servidor iniciado na porta 3041');
});

export default app;
