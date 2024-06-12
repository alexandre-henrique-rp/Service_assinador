import { Router } from 'express';
import PdfController from '../controller/pdf';

const RootRoutes = Router();

RootRoutes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

RootRoutes.get('/pdf', PdfController.PdfCreate);

export default RootRoutes;
